import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send({ msg: "admin" });
});

export default router;
