// index.js : Main entry point for the application

import express from 'express';
import config from './config.js';
import connectDB from './db/connect.db.js';
import logger from './utils/logger.utils.js';

await connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    logger.get({
        message: `Home Page`,
        req
    });

    res.send("Talkasauras Server is running!");
});

import healthRouter from './routes/health.route.js';
app.use('/health', healthRouter);

app.listen(config.PORT, () => {
    logger.info({
        message: `Server is running on port ${config.PORT}`,
    });
    logger.info({
        message: `Application started successfully`,
    });
});