import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { createProject, getProjectsByUser } from "../controllers/project.controller.js";
const router = Router();

router.post("/create", authMiddleware, createProject);
router.get("/user-projects", authMiddleware, getProjectsByUser)
export default router;
