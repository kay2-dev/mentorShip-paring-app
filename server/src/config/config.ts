import dotenv from 'dotenv';
dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    dbUrl: process.env.DB_URL || '',
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
    // Add other config values as needed
};
