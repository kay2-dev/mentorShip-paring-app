import { Request, Response, NextFunction } from 'express'

export const setAvalibilityController = (req: Request, res: Response, next: NextFunction) => {
    try
    {
        res.status(200).json({})
        next()
    } catch (error)
    {
        next(error)
    }
}
export const getAvalibilityController = (req: Request, res: Response, next: NextFunction) => {
    try
    {
        res.status(200).json({})
        next()
    } catch (error)
    {
        next(error)
    }
}
export const updateAvalibilityController = (req: Request, res: Response, next: NextFunction) => {
    try
    {
        res.status(200).json({})
        next()
    } catch (error)
    {
        next(error)
    }
}
export const deleteAvalibilityController = (req: Request, res: Response, next: NextFunction) => {
    try
    {
        res.status(200).json({})
        next()
    } catch (error)
    {
        next(error)
    }
}