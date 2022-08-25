import { Router } from "express";
const router = Router();
import admin from "./admin";
import Product from "./Product";

router.use("/admin", admin);
router.use("/products", Product);


export default router;
