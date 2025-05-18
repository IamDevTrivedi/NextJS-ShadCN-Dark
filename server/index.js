import express from "express";
import cors from "cors";
import config from "./config/config.js";
import connectDB from "./db/connect.db.js";
import logger from "./utils/logger.utils.js";
import cookieParser from "cookie-parser";

import healthRouter from "./routes/health.route.js";
import authRoutes from "./routes/authRoutes.route.js";

const app = express();

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
    logger.get({
        message: `Home Page`,
        req,
    });
    res.send("Talkasauras_Web Server is running!");
});

app.use("/api/v1/health", healthRouter);
app.use("/api/v1/auth", authRoutes);

app.use((err, req, res, next) => {
    logger.error({
        message: err.message || "Unknown error",
        stack: err.stack,
    });
    res.status(500).json({ error: "Internal Server Error" });
});

const startServer = async () => {
    try {
        await connectDB();
        app.listen(config.PORT, () => {
            logger.info({ message: `Server is running on port ${config.PORT}` });
            logger.info({ message: `Application started successfully` });
        });
    } catch (err) {
        logger.error({ message: "Failed to start server", error: err });
        process.exit(1);
    }
};

startServer();
