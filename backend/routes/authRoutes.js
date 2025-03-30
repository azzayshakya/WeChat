import express from "express";
import { Router } from "express";
import { getProfile, loginUser, registerUser } from "../controllers/user.controllers.js";
import validateRegistration from "../middleware/validateUser.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = Router();

router.post("/SignUp", validateRegistration, registerUser);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, getProfile);

export default router;
