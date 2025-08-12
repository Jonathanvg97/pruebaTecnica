"use client";

import { Product } from "@/types/product";
import { IconShoppingCartPlus } from "@tabler/icons-react";

interface ProductListProps {
  products: Product[];
  onAddToCart: (id: number) => void;
}

export default function ProductList({
  products,
  onAddToCart,
}: Readonly<ProductListProps>) {
  return (
    <section className="space-y-6">
      {/* Sin productos */}
      {products.length === 0 ? (
        <p className="text-gray-500 italic text-center py-8">
          No hay productos disponibles en este momento.
        </p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Imagen  */}
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
                  className="mt-auto cursor-pointer w-full flex items-center justify-center gap-2 bg-blue-950 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 active:scale-95 transition-transform duration-150"
                  onClick={() => onAddToCart(product.id)}
                >
                  <IconShoppingCartPlus stroke={2} size={18} />
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
