import express from "express";
import { Router } from "express";
import { getProfile, loginUser, logoutUser, registerUser } from "../controllers/user.controllers.js";
import validateRegistration from "../middleware/validateUser.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = Router();

router.post("/create-account", validateRegistration, registerUser);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, getProfile);
router.get("/logout", authMiddleware, logoutUser);


export default router;
