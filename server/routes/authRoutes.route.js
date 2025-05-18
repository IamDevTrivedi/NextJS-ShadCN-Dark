import express from "express";
const router = express.Router();

import { authController } from "../controllers/auth.controller.js";
import authMiddleWare from "../middlewares/auth.middleware.js";

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.post("/isUserAuthenticated", authMiddleWare, authController.isUserAuthenticated);
router.post("/sendVerificationOTP", authMiddleWare, authController.sendVerificationOTP);
router.post("/checkVerificationOTP", authMiddleWare, authController.checkVerificationOTP);
router.post("/sendResetPasswordOTP", authController.sendResetPasswordOTP);
router.post("/checkResetPasswordOTP", authController.checkResetPasswordOTP);

export default router;
