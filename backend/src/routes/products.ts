import { Router } from "express";
import { products } from "@utils/data/product";

const router = Router();

router.get("/", (_req, res) => {
  res.json(products);
});

export default router;
