"use client";

import { useEffect, useState } from "react";
import ProductList from "@/components/ProductList";
import { useProducts } from "@/hooks/useProducts";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import ProductCardSkeleton from "@/components/UI/ProductCardSkeleton";
import CartDrawer from "./CartDrawer";

export default function HomePage() {
  //
  const {
    getAllProducts,
    products,
    getAllProductsCart,
    cart,
    handleAddToCart,
    loading,
    handleDeleteProductFromCart,
  } = useProducts();
  //
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Abrir carrito cuando se agrega un producto
  const handleAddToCartAndOpen = (id: number) => {
    handleAddToCart(id);
    setIsCartOpen(true);
  };

  useEffect(() => {
    getAllProducts();
    getAllProductsCart();
  }, [getAllProducts, getAllProductsCart]);
  //
  return (
    <section className="h-screen mx-auto p-4 sm:p-6 overflow-hidden relative">
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
        >
          <IconShoppingCartPlus stroke={2} />
          Ver carrito ({cart.length})
        </button>
      </header>

      <h2 className="text-2xl font-extrabold tracking-tight flex items-center gap-2 pb-4">
        🛍️ Productos Disponibles
      </h2>

      {/* Lista de productos */}
      {loading ? (
        <ProductCardSkeleton count={6} />
      ) : (
        <div className="overflow-y-auto pr-1 scroll-thin h-[calc(100%-80px)]">
          <ProductList
            products={products}
            onAddToCart={handleAddToCartAndOpen}
          />
        </div>
      )}

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
    </section>
  );
}
