import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { config } from '../config/config';
import { BadRequestError, UnAuthorisedRequestError } from '../utils/app-error';

declare module 'express-serve-static-core' {
    interface Request {
        user?: JwtPayload;
    }
}




export function authGuard (req: Request, response: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[ 1 ];


    if (!token) throw new UnAuthorisedRequestError()


    try
    {
        const decoded = jwt.verify(token, config.JWT_SECRET);
        console.log(decoded)
        req.user = decoded as JwtPayload; // Attach user info to request object
        next();
    } catch (error)
    {
        next(new UnAuthorisedRequestError());
    }
}