
import { Request, Response, NextFunction } from 'express'
import { bookSessionService } from './session-service'
import { JwtPayload } from 'jsonwebtoken'
import { InternalServerError } from '../../../utils/app-error'


export const bookSessionController = async (req: Request, res: Response, next: NextFunction) => {
    try
    {
        await bookSessionService(req.user!, req.body)
        res.status(200).json({
            message: 'session created'
        })
        next()
    } catch (error: any)
    {
        next(new InternalServerError(error.message))
    }
}

export const getSessionController = (req: Request, res: Response, next: NextFunction) => {
    try
    {
        res.status(200).json({})
        next()
    } catch (error)
    {
        next(error)
    }
}
export const updateSessionController = (req: Request, res: Response, next: NextFunction) => {
    try
    {
        res.status(200).json({})
        next()
    } catch (error)
    {
        next(error)
    }
}