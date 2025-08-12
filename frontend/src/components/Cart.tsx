"use client";

import { Product } from "@/types/product";
import { IconShoppingCartPlus, IconTrash } from "@tabler/icons-react";

interface CartItem extends Product {
  quantity: number;
}

interface CartProps {
  cart: Product[];
  onRemoveFromCart?: (id: number) => void;
}

export default function Cart({ cart, onRemoveFromCart }: Readonly<CartProps>) {
  const groupedCart: CartItem[] = Object.values(
    cart.reduce((acc, product) => {
      if (!acc[product.id]) {
        acc[product.id] = { ...product, quantity: 1 };
      } else {
        acc[product.id].quantity += 1;
      }
      return acc;
    }, {} as Record<number, CartItem>)
  );

  const total = groupedCart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <section className="flex flex-col">
      {/* Encabezado */}
      <header className="mb-4 flex items-center gap-2 border-b pb-3">
        <IconShoppingCartPlus stroke={2} className="text-blue-950" />
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-blue-950">
          Carrito de compras
        </h2>
      </header>

      {groupedCart.length === 0 ? (
        <p className="text-gray-500 italic text-center mt-6">
          No hay productos en el carrito.
        </p>
      ) : (
        <>
          {/* Desktop */}
          <div className="hidden sm:block rounded-lg border border-gray-200 shadow-md overflow-hidden">
            <table className="w-full text-sm text-gray-700 border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">
                    Producto
                  </th>
                  <th className="px-4 py-3 text-center font-semibold">
                    Cantidad
                  </th>
                  <th className="px-4 py-3 text-right font-semibold">Precio</th>
                  {onRemoveFromCart && <th className="w-12 text-center"></th>}
                </tr>
              </thead>
              <tbody>
                {groupedCart.map((product) => (
                  <tr
                    key={product.id}
                    className="border-t hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-3 break-words max-w-[200px]">
                      {product.name}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {product.quantity}
                    </td>
                    <td className="px-4 py-3 text-right font-medium text-green-600 truncate max-w-[90px]">
                      ${(product.price * product.quantity).toFixed(2)}
                    </td>

                    {onRemoveFromCart && (
                      <td className="px-2 py-3 text-center">
                        <button
                          className="p-2 rounded-full hover:bg-red-100 text-red-500 hover:text-red-700 transition-colors"
                          onClick={() => onRemoveFromCart(product.id)}
                        >
                          <IconTrash stroke={2} size={18} />
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Móvil */}
          <div className="sm:hidden space-y-3">
            {groupedCart.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm border"
              >
                <div className="w-3/4">
                  <p className="font-medium text-gray-800 break-words">
                    {product.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    Cantidad: {product.quantity}
                  </p>
                  <p className="text-green-600 font-semibold">
                    ${(product.price * product.quantity).toFixed(2)}
                  </p>
                </div>
                {onRemoveFromCart && (
                  <button
                    className="p-2 rounded-full hover:bg-red-100 text-red-500 hover:text-red-700 transition-colors"
                    onClick={() => onRemoveFromCart(product.id)}
                  >
                    <IconTrash stroke={2} size={18} />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Total fijo */}
          <div className="mt-4 bg-white border-t shadow-md p-4 flex justify-between items-center font-bold text-lg">
            <span className="text-blue-950">Total:</span>
            <span className="text-green-700">${total.toFixed(2)}</span>
          </div>
        </>
      )}
    </section>
  );
}
