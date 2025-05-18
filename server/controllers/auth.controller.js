import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { check } from "email-sanitizer";

import logger from "../utils/logger.utils.js";
import config from "../config/config.js";

import { isValidEmail, isValidPassword } from "../utils/validator.utils.js";
import { generateLoginAlertPayload } from "../utils/ip.utils.js";
import { generateTokenAndSetCookie } from "../utils/authToken.utils.js";

import {
    generateWelcomeEmail,
    generateOtpEmail,
    generateResetOtpEmail,
    generateLoginAlertEmail,
} from "../utils/emailTemplates.utils.js";

import transporter from "../config/nodemailer.config.js";

const authController = {
    register: async (req, res) => {
        logger.post({
            message: "api > v1 > auth > register",
            req,
        });

        const { firstName, lastName, email, password } = req.body;

        if (!firstName || !lastName || !email || !password) {
            logger.error({ message: "All fields are required" });

            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        if (!isValidEmail(email)) {
            logger.error({ message: "Invalid email" });

            return res.status(400).json({
                success: false,
                message: "Invalid email",
            });
        }

        if (!isValidPassword(password)) {
            logger.error({ message: "Invalid password" });

            return res.status(400).json({
                success: false,
                message:
                    "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
            });
        }

        try {
            const existingUser = await User.findOne({ email });

            if (existingUser) {
                logger.error({ message: "Email already in use" });

                return res.status(400).json({
                    success: false,
                    message: "Email already in use",
                });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await User.create({
                firstName,
                lastName,
                email,
                hashedPassword,
            });

            await newUser.save();

            console.log(newUser?._id);
            const token = await generateTokenAndSetCookie(res, newUser._id);
            console.log(token);

            const payload = {
                from: config.SENDER_EMAIL,
                to: email,
                subject: "Welcome to Talkasauras",
                html: generateWelcomeEmail({
                    name: `${firstName} ${lastName}`,
                    year: new Date().getFullYear(),
                }),
            };

            try {
                await transporter.sendMail(payload);
            } catch (error) {
                logger.error({
                    message: "Failed sending welcome email",
                    error,
                });
            }

            res.status(201).json({
                success: true,
                message: "User registered successfully",
                user: {
                    firstName,
                    lastName,
                    email,
                    token,
                },
            });
        } catch (error) {
            logger.error({
                message: "Error in register",
                error,
            });

            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    },

    login: async (req, res) => {
        logger.post({
            message: "api > v1 > auth > login",
            req,
        });

        const { email, password } = req.body;

        if (!email || !password) {
            logger.error({ message: "All fields are required" });

            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        if (!isValidEmail(email)) {
            logger.error({ message: "Invalid email" });

            return res.status(400).json({
                success: false,
                message: "Invalid email",
            });
        }

        if (!isValidPassword(password)) {
            logger.error({ message: "Invalid password" });

            return res.status(400).json({
                success: false,
                message:
                    "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
            });
        }

        try {
            const user = await User.findOne({ email });

            if (!user) {
                logger.error({ message: "Invalid email or password" });

                return res.status(404).json({
                    success: false,
                    message: "Invalid email or password",
                });
            }

            const isPasswordMatch = await bcrypt.compare(password, user.hashedPassword);

            if (!isPasswordMatch) {
                logger.error({ message: "Invalid email or password" });

                return res.status(404).json({
                    success: false,
                    message: "Invalid email or password",
                });
            }

            const token = await generateTokenAndSetCookie(res, user._id);

            const { ip, device, location, time, year } = await generateLoginAlertPayload(req);

            const payload = {
                from: config.SENDER_EMAIL,
                to: email,
                subject: "New Login Alert",
                html: generateLoginAlertEmail({
                    device,
                    location,
                    ip,
                    time,
                    year,
                }),
            };

            try {
                await transporter.sendMail(payload);
            } catch (error) {
                logger.error({
                    message: "Failed sending login alert email",
                    error,
                });
            }

            return res.status(200).json({
                success: true,
                message: "User logged in successfully",

                userData: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    token,
                },
            });
        } catch (error) {
            logger.error({
                message: "Error in login",
                error,
            });

            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    },

    logout: async (req, res) => {
        logger.post({
            message: "api > v1 > auth > logout",
            req,
        });

        try {
            res.clearCookie("token", {
                httpOnly: true,
                secure: config.NODE_ENV === "production",
                sameSite: config.NODE_ENV === "production" ? "none" : "strict",
            });

            res.status(200).json({
                success: true,
                message: "Logged out successfully",
            });
        } catch (error) {
            logger.error({
                message: "Error in Logout",
                error,
            });

            res.status(200).json({
                success: true,
                message: "Error in Logging out",
            });
        }
    },

    isUserAuthenticated: async (req, res) => {
        logger.post({
            message: "api > v1 > auth > isUserAuthenticated",
            req,
        });

        res.status(200).json({
            success: true,
            message: "User is Authenticated",
            userData: {
                body: req.body,
            },
        });
    },

    sendVerificationOTP: async (req, res) => {
        logger.post({
            message: "api > v1 > auth > sendVerificationOTP",
            req,
        });

        try {
            const userId = req.body.userId;

            const user = await User.findById(userId);

            if (!user) {
                logger.warn({
                    message: "User do not exist",
                });

                return res.status(400).json({
                    success: false,
                    message: "User not found",
                });
            }

            if (user.isAccountVerified) {
                logger.warn({
                    message: "Account Already Verified",
                });

                return res.status(400).json({
                    success: false,
                    message: "Account Already Verified",
                });
            }

            const OTP = String(Math.floor(100000 + Math.random() * 900000));

            user.verificationOTP = OTP;
            user.verificationOTPExpiresAt = Date.now() + 5 * 60 * 1000;

            await user.save();

            const payload = {
                from: config.SENDER_EMAIL,
                to: user.email,
                subject: "Account Verification OTP",
                html: generateOtpEmail({
                    OTP,
                    validity: 5,
                    year: new Date().getFullYear(),
                }),
            };

            try {
                await transporter.sendMail(payload);

                return res.status(200).json({
                    success: true,
                    message: "Verification OTP sent successfully",
                });
            } catch (error) {
                logger.error({
                    message: "Error in sending Verification OTP",
                    error,
                });

                return res.status(500).json({
                    success: false,
                    message: "Error sending verification OTP",
                });
            }
        } catch (error) {
            logger.error({
                message: "Error in sendVerificationOTP",
                error,
            });

            return res.status(500).json({
                success: false,
                message: "Error sending OTP",
            });
        }
    },

    checkVerificationOTP: async (req, res) => {
        const { userId, OTP } = req.body;

        if (!OTP) {
            logger.warn({
                message: "OTP field in required",
            });

            res.status(400).json({
                success: false,
                message: "OTP field in required",
            });
        }

        try {
            const user = await User.findById(userId);

            if (!user) {
                logger.warn({
                    message: "User not Found",
                });

                res.status(400).json({
                    success: false,
                    message: "User not found",
                });
            }

            if (user.isAccountVerified) {
                logger.warn({
                    message: "Account already verified",
                });

                return res.status(400).json({
                    success: false,
                    message: "Account already verified",
                });
            }

            if (user.verificationOTP !== OTP) {
                logger.warn({
                    message: "Invalid OTP entered",
                });

                return res.status(400).json({ success: false, message: "Invalid OTP" });
            }

            if (user.verificationOTPExpiresAt < Date.now()) {
                logger.warn({
                    message: "OTP expired",
                });

                return res.status(400).json({ success: false, message: "OTP expired" });
            }

            user.isAccountVerified = true;

            user.verificationOTP = "";

            user.verificationOTPExpiresAt = null;

            await user.save();

            return res.status(200).json({
                success: true,
                message: "Account verified successfully",
            });
        } catch (error) {
            logger.error({
                message: "Error in checkVerificationOTP",
                error,
            });

            return res.status(500).json({
                success: false,
                message: "Error verifying account",
            });
        }
    },

    sendResetPasswordOTP: async (req, res) => {
        logger.post({
            message: "api > v1 > auth > sendResetPasswordOTP",
            req,
        });

        const { email } = req.body;

        if (!email) {
            logger.warn({
                message: "Email field is required",
            });

            return res.status(400).json({
                success: false,
                message: "Email field is required",
            });
        }

        if (!isValidEmail(email)) {
            logger.warn("Validation failed: Invalid email format", { email });
            return res.status(400).json({
                success: false,
                message: "Invalid email format",
            });
        }

        try {
            const user = await User.findOne({ email });

            if (!user) {
                logger.warn({
                    message: "No user found with the provided email",
                });

                return res.status(404).json({
                    success: false,
                    message: "No user found with the provided email",
                });
            }

            const OTP = String(Math.floor(100000 + Math.random() * 900000));
            user.resetOTP = OTP;
            user.resetOTPExpiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes from now

            await user.save();

            const payload = {
                from: config.SENDER_EMAIL,
                to: email,
                subject: "Reset Password Verification OTP",
                html: generateResetOtpEmail({
                    OTP,
                    validity: 5,
                    year: new Date().getFullYear(),
                }),
            };

            try {
                await transporter.sendMail(payload);
            } catch (error) {
                logger.error({
                    message: "Failed to send the Reset Password OTP email",
                    error,
                });

                return res.status(500).json({
                    success: false,
                    message: "Failed to send OTP email. Please try again later.",
                });
            }

            return res.status(200).json({
                success: true,
                message: "OTP has been sent to your email. It will expire in 5 minutes.",
            });
        } catch (error) {
            logger.error({
                message: "Unexpected error during OTP generation",
                error,
            });

            return res.status(500).json({
                success: false,
                message: "An error occurred while processing your request. Please try again.",
            });
        }
    },

    isResetPasswordOTPMatch: async (req, res) => {
        logger.post({
            message: "api > v1 > auth > isResetPasswordOTPMatch",
            req,
        });

        const { email, OTP } = req.body;

        if (!email || !OTP) {
            logger.warn({
                message: "All Fields are Mandatory",
            });

            return res.status(400).json({
                success: false,
                message: "All Fields are Mandatory",
            });
        }

        if (!isValidEmail(email)) {
            logger.warn({
                message: "Invalid Email Format",
            });

            return res.status(400).json({
                success: false,
                message: "Invalid Email Format",
            });
        }

        try {
            const user = await User.findOne({ email });

            if (!user) {
                logger.warn({
                    message: "No User found",
                });

                return res.status(400).json({
                    success: false,
                    message: "No User found",
                });
            }

            if (user.resetOTP !== OTP) {
                logger.warn({
                    message: "Invalid OTP",
                });

                return res.status(400).json({
                    success: false,
                    message: "Invalid OTP",
                });
            }

            logger.info({
                message: "OTP matched successfully",
                email,
            });

            return res.status(200).json({
                success: true,
                message: "OTP matched successfully",
            });
        } catch (error) {
            logger.error({
                message: "Error in isResetPasswordOTPMatch",
                error,
            });

            return res.status(500).json({
                success: false,
                message: "Internal Server Error",
            });
        }
    },

    checkResetPasswordOTP: async (req, res) => {
        logger.post({
            message: "api > v1 > auth > checkResetPasswordOTP",
        });

        const { email, OTP, password } = req.body;

        if (!email || !OTP || !password) {
            logger.warn({
                message: "Missing required fields",
            });
            return res.status(400).json({
                success: false,
                message: "Missing required fields",
            });
        }

        if (!isValidEmail(email)) {
            logger.warn({
                message: "Invalid Email Format",
            });

            return res.status(400).json({
                success: false,
                message: "Invalid Email Format",
            });
        }

        if (!isValidPassword(password)) {
            logger.error({ message: "Invalid password" });

            return res.status(400).json({
                success: false,
                message:
                    "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
            });
        }

        try {
            const user = await User.findOne({ email });

            if (!user) {
                logger.warn({
                    message: "No user found with the provided email",
                });

                return res.status(404).json({
                    success: false,
                    message: "No user found with the provided email",
                });
            }

            if (user.resetOTP !== OTP) {
                logger.warn({
                    message: "Invalid OTP entered",
                });

                return res.status(400).json({
                    success: false,
                    message: "Invalid OTP entered",
                });
            }

            if (user.resetOTPExpiresAt > Date.now()) {
                logger.warn({
                    message: "Reset Password OTP is expired",
                });

                return res.status(400).json({
                    success: false,
                    message: "Reset Password OTP is expired",
                });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            user.hashedPassword = hashedPassword;
            user.resetOTP = "";
            user.resetOTPExpiresAt = null;

            await user.save();

            return res.status(200).json({
                success: true,
                message: "Password Reset Successfully",
            });
        } catch (error) {
            logger.error({
                message: "Error in checkResetPasswordOTP",
                error,
            });
            return res.status(500).json({
                success: false,
                message: "Error in Verification of Reset OTP",
            });
        }
    },
};

export { authController };
