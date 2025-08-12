import { useCallback, useState } from "react";
import { getProducts } from "../services/product.service";
import { Product } from "@/types/product";
import {
  addProductToCart,
  deleteProductFromCart,
  getProductsCart,
} from "@/services/cart.service";
export const useProducts = () => {
  //
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingCart, setLoadingCart] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  //
  const getAllProducts = useCallback(async () => {
    setLoading(true);
    try {
      // Simular delay de 1 segundo antes de cargar datos
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const res = await getProducts();
      setProducts(res);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const getAllProductsCart = useCallback(async () => {
    setLoadingCart(true);
    try {
      const res = await getProductsCart();
      setCart(res);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingCart(false);
    }
  }, []);

  const handleAddToCart = async (id: number) => {
    setLoadingCart(true);
    try {
      const updatedCart = await addProductToCart(id);
      setCart(updatedCart.cart);
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
    } finally {
      setLoadingCart(false);
    }
  };

  const handleDeleteProductFromCart = async (id: number) => {
    setLoadingCart(true);
    try {
      const updatedCart = await deleteProductFromCart(id);
      setCart(updatedCart.cart);
    } catch (error) {
      console.error("Error al eliminar del carrito:", error);
    } finally {
      setLoadingCart(false);
    }
  };

  return {
    loading,
    loadingCart,
    products,
    getAllProducts,
    cart,
    getAllProductsCart,
    handleAddToCart,
    handleDeleteProductFromCart,
  };
};
