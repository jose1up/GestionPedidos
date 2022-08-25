import { Router } from "express";
import { createNewProduct, getProduct } from "../../controllers/product";
const router = Router();

router.get("/", getProduct);
router.post("/createProduct", createNewProduct);

export default router;
