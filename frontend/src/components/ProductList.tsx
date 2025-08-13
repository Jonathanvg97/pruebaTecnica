"use client";

import { Product } from "@/types/product";
import { IconShoppingCartPlus } from "@tabler/icons-react";

interface ProductListProps {
  products: Product[];
  allProducts?: Product[];
  onAddToCart: (id: number, price: number) => void;
  disabledChecker?: (price: number) => boolean;
}

export default function ProductList({
  products,
  allProducts,
  onAddToCart,
  disabledChecker,
}: Readonly<ProductListProps>) {
  //
  const noProductsAtAll = !allProducts || allProducts.length === 0;
  const noProductsInBudget =
    products.length === 0 && allProducts && allProducts.length > 0;

  return (
    <section>
      {noProductsAtAll ? (
        <p className="text-gray-400 italic text-center py-8 text-lg font-semibold tracking-wide select-none">
          No hay productos disponibles en este momento.
        </p>
      ) : noProductsInBudget ? (
        <p className="text-red-800 italic text-center py-8 text-lg font-semibold tracking-wide select-none">
          No hay productos disponibles para tu presupuesto.
        </p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const disabled = disabledChecker
              ? disabledChecker(product.price)
              : false;

            return (
              <div
                key={product.id}
                className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Imagen */}
                <div className="bg-gray-100 h-40 sm:h-44 md:h-48 rounded-t-xl flex items-center justify-center text-gray-400 text-sm">
                  📦 Imagen del producto
                </div>

                {/* Contenido */}
                <div className="flex flex-col flex-1 p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Precio:{" "}
                    <span className="text-green-600 font-bold text-lg">
                      ${product.price}
                    </span>
                  </p>

                  {/* Botón */}
                  <button
                    disabled={disabled}
                    className={`mt-auto cursor-pointer w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-transform duration-150
                      ${
                        disabled
                          ? "bg-gray-400 cursor-not-allowed text-gray-700"
                          : "bg-blue-950 text-white hover:bg-blue-800 active:scale-95"
                      }
                    `}
                    onClick={() =>
                      !disabled && onAddToCart(product.id, product.price)
                    }
                  >
                    <IconShoppingCartPlus stroke={2} size={18} />
                    Agregar al carrito
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
