
import e, { Request, Response, NextFunction } from 'express';
import { User, UserPayload } from '../types/user/user-types';
import { loginUserService, registerUserService } from '../service/auth-service';
import { cookieOption } from '../constant/constants';
import { jwtHandler } from '../utils/jwt-handler';
import { config } from '../config/config';
import jwt from 'jsonwebtoken'
import { error } from 'console';
import { BadRequestError, ineternalServerError } from '../utils/app-error';




export const register = async (req: Request, res: Response, next: NextFunction) => {

    try
    {
        await registerUserService(req.body as User);
        res.status(201).json({
            message: "User registered successfully",
        })
        next();
    } catch (error: any)
    {
        if (error.code === '23505')
        {
            next(new ineternalServerError())
        }
        next(error)
    }

}




export const login = async (req: Request, res: Response, next: NextFunction) => {
    try
    {

        const { acessToken, refreshToken } = await loginUserService(req.body as User);
        res.cookie('accessToken', refreshToken, cookieOption).status(200).json({
            message: "User logged in successfully",
            token: { acessToken, refreshToken }

        })
        next();
    } catch (error)
    {
        next(error);
    }

}


export const refresh = async (req: Request, res: Response, next: NextFunction) => {
    const refreshToken = req.cookies.refreshToken

    if (!refreshToken) throw new BadRequestError()

    jwt.verify(refreshToken, config.JWT_SECRET, (error: jwt.VerifyErrors | null, user: any) => {
        if (error) return
        const { acessToken, refreshToken } = jwtHandler.generateToken(user as UserPayload)

        res.cookie(refreshToken, cookieOption).status(200).json({
            token: acessToken
        })
    })
    next()
}

















