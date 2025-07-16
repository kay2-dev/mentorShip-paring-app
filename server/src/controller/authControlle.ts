
import e, { Request, Response, NextFunction } from 'express';
import { User } from '../types/user/user-types';
import { loginUserService, registerUserService } from '../service/auth-service';




export const register = async (req: Request, res: Response, next: NextFunction) => {

    try
    {
        const token = await registerUserService(req.body as User);
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



export const login = async (req: Request, res: Response, next: NextFunction) => {
    try
    {

        const token = await loginUserService(req.body as User);
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



















