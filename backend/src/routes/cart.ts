import { Router } from "express";
import {
  addToCart,
  deleteProduct,
  getCart,
} from "../controllers/cartController";

const router = Router();

router.post("/", addToCart);
router.get("/", getCart);
router.delete("/:id", deleteProduct);

export default router;
