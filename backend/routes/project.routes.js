import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  addUserToProject,
  createMessage,
  createProject,
  getProjectById,
  getProjectMessages,
  getProjectsByUser,
} from "../controllers/project.controller.js";
const router = Router();

router.post("/create", authMiddleware, createProject);
router.get("/user-projects", authMiddleware, getProjectsByUser);
router.post("/add-user", authMiddleware, addUserToProject);
router.get("/get-project/:projectId", authMiddleware, getProjectById);

router.post("/create-message", createMessage);
router.get("/:projectId", getProjectMessages);
export default router;
