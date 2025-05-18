import logger from './logger.utils.js';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';

const generateTokenAndSetCookie = async (res, userId) => {
    try {
        const token = jwt.sign({ userId: userId }, config.JWT_SECRET, {
            expiresIn: '7d',
        });

        res.cookie('token', token, {
            httpOnly: true,
            secure: config.NODE_ENV === 'production',
            sameSite: config.NODE_ENV === 'production' ? 'none' : 'strict',
        });

        return token;
    } catch (error) {
        logger.error({
            message: 'Error in Token Generation',
            error,
        });
    }
};

export { generateTokenAndSetCookie };
