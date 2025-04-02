import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { addUserToProject, createProject, getProjectsByUser } from "../controllers/project.controller.js";
const router = Router();

router.post("/create", authMiddleware, createProject);
router.get("/user-projects", authMiddleware, getProjectsByUser)
router.post("/add-user", authMiddleware, addUserToProject);

export default router;
