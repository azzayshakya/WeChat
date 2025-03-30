import express from "express";
import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user.controllers.js";
import validateRegistration from "../middleware/validateUser.js";
const router = Router();

router.post("/SignUp", validateRegistration, registerUser);
router.post("/login", loginUser);

export default router;
