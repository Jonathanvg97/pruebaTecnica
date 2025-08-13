"use client";

import { useEffect, useState, useCallback } from "react";
import ProductList from "@/components/ProductList";
import { useProducts } from "@/hooks/useProducts";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import ProductCardSkeleton from "@/components/UI/ProductCardSkeleton";
import CartDrawer from "./CartDrawer";
import { ConfirmModal } from "./UI/ConfirmModal";

export default function HomePage() {
  const {
    getAllProducts,
    products,
    getAllProductsCart,
    cart,
    handleAddToCart,
    loading,
    handleDeleteProductFromCart,
    clearCart,
  } = useProducts();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [budget, setBudget] = useState<number | "">(150);
  const [pendingBudget, setPendingBudget] = useState<number | "">(budget);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Calcular total carrito y presupuesto restante
  const totalCartPrice = cart.reduce((acc, p) => acc + p.price, 0);
  const numericBudget = typeof budget === "number" ? budget : 0;
  const remainingBudget = numericBudget - totalCartPrice;

  // Filtrar productos que caben en el presupuesto restante
  const filteredProducts = products.filter((p) => p.price <= remainingBudget);

  // Handler para agregar producto validando presupuesto
  const handleAddToCartAndOpen = useCallback(
    (productId: number, productPrice: number) => {
      if (productPrice <= remainingBudget) {
        handleAddToCart(productId);
        setIsCartOpen(true);
      }
    },
    [handleAddToCart, remainingBudget]
  );

  // Actualiza solo el input, sin modificar el presupuesto real ni limpiar carrito aún
  const handlePendingBudgetChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const val = e.target.value;
    const num = Number(val);

    if (val === "") {
      setPendingBudget("");
    } else if (!isNaN(num)) {
      setPendingBudget(num < 1 ? 1 : num);
    }
  };

  const onClickModifyBudget = () => {
    // Solo abrir modal si hay un cambio real
    if (pendingBudget !== budget) {
      setShowConfirmModal(true);
    }
  };

  // Confirmación de cambio: limpiar carrito y actualizar presupuesto
  const confirmClearCartAndBudget = () => {
    clearCart();
    setBudget(pendingBudget);
    setShowConfirmModal(false);
  };

  const cancelClearCart = () => {
    setPendingBudget(budget);
    setShowConfirmModal(false);
  };

  useEffect(() => {
    getAllProducts();
    getAllProductsCart();
  }, [getAllProducts, getAllProductsCart]);

  return (
    <section className="h-screen mx-auto p-4 sm:p-6 overflow-hidden relative flex flex-col">
      {/* Header */}
      <header className="mb-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-200">
            🛒 Tienda Online
          </h1>
          <p className="mt-1 text-gray-300 text-sm sm:text-base">
            Elige tus productos favoritos y agrégalos al carrito.
          </p>
        </div>

        <button
          onClick={() => setIsCartOpen(true)}
          className="flex items-center cursor-pointer justify-center gap-2 bg-blue-950 hover:bg-blue-900 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors w-full sm:w-auto"
          aria-label="Ver carrito"
        >
          <IconShoppingCartPlus stroke={2} />
          Ver carrito ({cart.length})
        </button>
      </header>

      <h2 className="text-2xl font-extrabold tracking-tight flex items-center gap-2">
        🛍️ Productos Disponibles
      </h2>

      <div className="mt-2 text-gray-300 pb-4 flex flex-wrap items-center gap-2">
        <label htmlFor="budget" className="block text-gray-300 min-w-[140px]">
          Presupuesto máximo:
        </label>
        <input
          id="budget"
          type="number"
          value={pendingBudget}
          onChange={handlePendingBudgetChange}
          placeholder="1"
          min={1}
          className="w-24 min-w-[80px] rounded bg-gray-700 bg-opacity-50 text-white placeholder-gray-400 px-3 py-1 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 disabled:cursor-not-allowed disabled:bg-gray-600"
        />
        <button
          onClick={onClickModifyBudget}
          disabled={pendingBudget === budget}
          className={`px-4 py-1 rounded font-semibold transition-colors duration-200 ${
            pendingBudget === budget
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-950 hover:bg-blue-900 text-white"
          }`}
        >
          Modificar presupuesto
        </button>
        <p className="w-full sm:w-auto mt-2 sm:mt-0 text-sm text-gray-400">
          Presupuesto restante: ${remainingBudget.toFixed(2)}
        </p>
      </div>

      {/* Lista de productos */}
      <div className="flex-1 overflow-y-auto pr-1 scroll-thin min-h-0">
        {loading ? (
          <ProductCardSkeleton count={6} />
        ) : (
          <ProductList
            products={filteredProducts}
            allProducts={products}
            onAddToCart={handleAddToCartAndOpen}
            disabledChecker={(price) => price > remainingBudget}
          />
        )}
      </div>

      {/* Drawer del carrito */}
      <CartDrawer
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cart={cart}
        handleDeleteProductFromCart={handleDeleteProductFromCart}
      />

      {/* Fondo oscuro cuando el carrito está abierto */}
      {isCartOpen && (
        <button
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
          aria-label="Cerrar carrito"
        />
      )}

      {/* Modal de confirmación */}
      <ConfirmModal
        isOpen={showConfirmModal}
        onConfirm={confirmClearCartAndBudget}
        onCancel={cancelClearCart}
        message="Estás a punto de modificar tu presupuesto y vaciar el carrito. ¿Deseas continuar?"
      />
    </section>
  );
}
