import { Router } from "express";
const router = Router();
import admin from "./admin";
import Product from "./Product";
import Category from "./Category"

router.use("/admin", admin);
router.use("/products", Product);
router.use("/categorys", Category);


export default router;
