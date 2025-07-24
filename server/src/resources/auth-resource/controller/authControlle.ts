
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'
import { loginUserService, registerUserService } from './auth-service';
import { NewUsers, User, UserPayload } from '../../../types/user/user-types';
import { BadRequestError, ineternalServerError } from '../../../utils/app-error';
import { cookieOption } from '../../../constant/constants';
import { config } from '../../../config/config';
import { jwtHandler } from '../../../utils/jwt-handler';






export const register = async (req: Request, res: Response, next: NextFunction) => {

    try
    {
        await registerUserService(req.body as NewUsers);
        res.status(201).json({
            message: "User registered successfully",
        })
        next();
    } catch (error: any)
    {
        if (error.code === '23505')
        {
            next(new ineternalServerError(error.message))
        }
        next(error)
    }

}




export const login = async (req: Request, res: Response, next: NextFunction) => {
    try
    {

        const { acessToken, refreshToken } = await loginUserService(req.body as User);
        res.cookie('refreshToken', refreshToken, cookieOption).status(200).json({
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

        res.cookie('refreshToken', refreshToken, cookieOption).status(200).json({
            token: acessToken
        })
    })
    next()
}

















