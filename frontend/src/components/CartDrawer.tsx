import React from "react";
import { Product } from "@/types/product";
import Cart from "./Cart";

interface CartDrawerProps {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cart: Product[];
  handleDeleteProductFromCart: (id: number) => void;
}

export default function CartDrawer({
  isCartOpen,
  setIsCartOpen,
  cart,
  handleDeleteProductFromCart,
}: Readonly<CartDrawerProps>) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-full sm:w-90 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <button
          onClick={() => setIsCartOpen(false)}
          className="text-gray-600 cursor-pointer hover:text-gray-800 text-xl"
        >
          Cerrar carrito ✕
        </button>
      </div>

      <div className="overflow-y-auto p-4 scroll-thin h-[calc(100%-60px)]">
        <Cart cart={cart} onRemoveFromCart={handleDeleteProductFromCart} />
      </div>
    </div>
  );
}
