import express from "express";
const router = express.Router();

import { authController } from "../controllers/auth.controller.js";
import authMiddleWare from "../middlewares/auth.middleware.js";

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.post(
  "/isUserAuthenticated",
  authMiddleWare,
  authController.isUserAuthenticated
);

export default router;
