
import e, { Request, Response, NextFunction } from 'express';
import { config } from '../config/config';
import { User } from '../types/user/user-types';
import { loginUserService, registerUserService } from '../service/auth-service';




export const register = (req: Request, res: Response, next: NextFunction) => {

    try
    {
        const token = registerUserService(req.body as User);
        res.status(200).json({
            message: "User registered successfully",
            token: token
        })
        next();
    } catch (error)
    {
        next(error);
    }

}



export const login = (req: Request, res: Response, next: NextFunction) => {
    try
    {

        const token = loginUserService(req.body as User);
        res.status(200).json({
            message: "User logged in successfully",
            token: token
        })
        next();
    } catch (error)
    {
        next(error);
    }

}



















