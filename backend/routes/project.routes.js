import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { addUserToProject, createProject, getProjectById, getProjectsByUser } from "../controllers/project.controller.js";
const router = Router();

router.post("/create", authMiddleware, createProject);
router.get("/user-projects", authMiddleware, getProjectsByUser)
router.post("/add-user", authMiddleware, addUserToProject);
router.get("/get-project/:projectId", authMiddleware, getProjectById);

export default router;
