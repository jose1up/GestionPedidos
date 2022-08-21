import { Router } from "express";
const router = Router();
import admin from "./admin";

router.use("/admin", admin);

export default router;
