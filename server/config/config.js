import dotenv from 'dotenv';
dotenv.config();

const config = {
    PORT_DEV: process.env.PORT_DEV,
    PORT_PROD: process.env.PORT_PROD,
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.NODE_ENV === 'development'
        ? process.env.PORT_DEV
        : process.env.PORT_PROD,
    LOGGING_ENABLED: process.env.LOGGING_ENABLED,
    MONGODB_URL: process.env.MONGODB_URL,

    JWT_SECRET: process.env.JWT_SECRET,

    EMAIL_HOST: process.env.EMAIL_HOST,
    EMAIL_PORT: process.env.EMAIL_PORT,
    SMPT_USER: process.env.SMPT_USER,
    SMPT_PASSWORD: process.env.SMPT_PASSWORD,
    SENDER_EMAIL: process.env.SENDER_EMAIL
}


export default config;