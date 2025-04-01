import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { createProject } from "../controllers/project.controller.js";
const router = Router();

router.post("/create", authMiddleware, createProject);
export default router;
