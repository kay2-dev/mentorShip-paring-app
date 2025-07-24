
import { Request, Response, NextFunction } from 'express'


export const createSessionController = (req: Request, res: Response, next: NextFunction) => {
    try
    {
        res.status(200).json({})
        next()
    } catch (error)
    {
        next(error)
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