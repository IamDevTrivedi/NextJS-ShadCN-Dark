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
    MONGODB_URL: process.env.MONGODB_URL
}


export default config;