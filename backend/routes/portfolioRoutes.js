import { Router } from "express";
import { submitGetInTouchForm } from "../controllers/portfolio.controller.js";

const router = Router();

router.post("/GetInTouch",submitGetInTouchForm);

export default router;
