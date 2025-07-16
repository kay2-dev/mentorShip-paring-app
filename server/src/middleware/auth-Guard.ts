import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/config';
import { BadRequestError } from '../utils/app-error';

declare module 'express-serve-static-core' {
    interface Request {
        user?: any;
    }
}




export function authGuard (req: Request, response: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[ 1 ];

    if (!token)
        throw new BadRequestError()

    try
    {
        const decoded = jwt.verify(token, config.JWT_SECRET);
        req.user = decoded; // Attach user info to request object
        next();
    } catch (error)
    {
        next(new BadRequestError());
    }
}