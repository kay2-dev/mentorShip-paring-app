
import { Request, Response, NextFunction } from 'express'


const createSessionController = (req: Request, res: Response, next: NextFunction) => {
    try
    {
        res.status(200).json({})
        next()
    } catch (error)
    {
        next(error)
    }
}

const getSessionController = (req: Request, res: Response, next: NextFunction) => {
    try
    {
        res.status(200).json({})
        next()
    } catch (error)
    {
        next(error)
    }
}
const updateSessionController = (req: Request, res: Response, next: NextFunction) => {
    try
    {
        res.status(200).json({})
        next()
    } catch (error)
    {
        next(error)
    }
}