import { AddToCartResponse } from "@/types/card";
import { Product } from "@/types/product";
import { envs } from "@/utils/enviroment";

export const getProductsCart = async (): Promise<Product[]> => {
  const res = await fetch(`${envs.BACKEND_BASE_URL}/cart`);
  return res.json();
};

export const addProductToCart = async (
  id: number
): Promise<AddToCartResponse> => {
  const res = await fetch(`${envs.BACKEND_BASE_URL}/cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  return res.json();
};

export const deleteProductFromCart = async (id: number) => {
  const res = await fetch(`${envs.BACKEND_BASE_URL}/cart/${id}`, {
    method: "DELETE",
  });
  return res.json();
};
