import nodemailer from "nodemailer";
import logger from "../utils/logger.utils.js";
import config from "./config.js";

const transporter = nodemailer.createTransport({
  host: config.EMAIL_HOST,
  port: config.EMAIL_PORT,
  auth: {
    user: config.SMPT_USER,
    pass: config.SMPT_PASSWORD,
  },
});

transporter.verify((error, success) => {
  if (error) {
    logger.error({ message: "Nodemailer configuration error:", error });
  }
});

export default transporter;
