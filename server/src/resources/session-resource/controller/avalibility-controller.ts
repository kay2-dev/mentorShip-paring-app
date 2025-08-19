import { Request, Response, NextFunction } from 'express'
import { getAvailabiltyService, setAvailabiltyService } from './session-service'
import { NewAvaliability } from '../../../types/user/user-types'
import { BadRequestError } from '../../../utils/app-error'

export const setAvalibilityController = async (req: Request, res: Response, next: NextFunction) => {
    try
    {
        await setAvailabiltyService(req.user!, req.body as NewAvaliability)
        res.status(200).json({ message: 'Action Completed' })
        next()
    } catch (error: any)
    {
        next(new BadRequestError(error.message))
    }
}

export const getAvalibilityController = async (req: Request, res: Response, next: NextFunction) => {
    try
    {
        const mentorAvalibility = await getAvailabiltyService(req.user!)
        res.status(200).json(mentorAvalibility)
        next()
    } catch (error: any)
    {
        next(new BadRequestError(error.message))
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