import jwt from "jsonwebtoken";
import logger from "../utils/logger.utils.js";
import config from "../config/config.js";

export default function authMiddleware(req, res, next) {
    logger.info({ message: "Auth Middleware Called" });

    const { token } = req.cookies;

    if (!token) {
        logger.error({
            message: "Token Not Found",
            error: "User is not Authorized",
        });

        return res.status(401).json({
            success: false,
            message: "User is not Authorized",
        });
    }

    try {
        const decodedToken = jwt.verify(token, config.JWT_SECRET);

        if (decodedToken?.userId) {
            req.body.userId = decodedToken.userId;
            next();
        } else {
            logger.error({ message: "Invalid Token Payload" });

            return res.status(401).json({
                success: false,
                message: "User is not Authorized",
            });
        }
    } catch (error) {
        logger.error({
            message: "Error in Auth Middleware",
            error: error.message,
        });

        console.log(error);

        return res.status(401).json({
            success: false,
            message: "Authentication failed. Please login again.",
        });
    }
}
