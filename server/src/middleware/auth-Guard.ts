import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/config';

declare module 'express-serve-static-core' {
    interface Request {
        user?: any;
    }
}




export function authGuard (req: Request, response: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[ 1 ];

    if (!token)
        return response.status(401).json({ message: 'Unauthorized' });

    try
    {
        const decoded = jwt.verify(token, config.JWT_SECRET);
        req.user = decoded; // Attach user info to request object
        next();
    } catch (error)
    {
        next(response.status(401).json({ message: 'Invalid token' }));
    }
}