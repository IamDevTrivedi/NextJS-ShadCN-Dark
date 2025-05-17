import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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

      const token = generateTokenAndSetCookie(res, newUser._id);

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

      const isPasswordMatch = await bcrypt.compare(
        password,
        user.hashedPassword
      );

      if (!isPasswordMatch) {
        logger.error({ message: "Invalid email or password" });

        return res.status(404).json({
          success: false,
          message: "Invalid email or password",
        });
      }

      const token = await generateTokenAndSetCookie(res, user._id);

      const { ip, device, location, time, year } =
        await generateLoginAlertPayload(req);

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
};

export { authController };
