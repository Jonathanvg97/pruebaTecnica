import { Product } from "./product";

export interface AddToCartResponse {
  message: string;
  cart: Product[];
}