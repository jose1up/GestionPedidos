import { Router } from "express";
import { createNewCategory, getCategorys } from "../../controllers/category" ;
const router = Router();

router.get("/", getCategorys);
router.post("/", createNewCategory);

export default router;