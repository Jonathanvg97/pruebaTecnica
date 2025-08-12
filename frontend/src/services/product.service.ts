import { Product } from "@/types/product";
import { envs } from "@/utils/enviroment";


export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${envs.BACKEND_BASE_URL}/products`);
  return res.json();
};


