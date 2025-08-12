import { Request, Response } from "express";
import { products } from "@utils/data/product";
import { Product } from "@models/product";

let cart: Product[] = [];

/**
 * Agrega un producto al carrito.
 */
export const addToCart = (req: Request, res: Response) => {
  const { id } = req.body;

  const product = products.find((p) => p.id === id);
  if (!product) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }

  cart.push(product);
  return res.json({ message: "Producto agregado al carrito", cart });
};

/**
 * Obtiene todos los productos del carrito.
 */
export const getCart = (_req: Request, res: Response) => {
  return res.json(cart);
};

export const deleteProduct = (req: Request, res: Response) => {
  const { id } = req.params;
  const product = cart.find((p) => p.id === parseInt(id));
  if (!product) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }
  cart = cart.filter((p) => p.id !== parseInt(id));
  return res.json({ message: "Producto eliminado del carrito", cart });
};
