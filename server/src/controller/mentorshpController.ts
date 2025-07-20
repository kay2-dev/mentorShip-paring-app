import { Request, Response, NextFunction } from "express"
import { getAllMentorsService } from "../service/mentor-ship-service"


export const getAllMentors = async (req: Request, res: Response, next: NextFunction) => {
    try
    {
        const allmentors = await getAllMentorsService()
        res.status(200).json(allmentors)
        next()
    } catch (error)
    {
        next(error)
    }
}

// creation of Request...
export const sendRequestToMentors = async (req: Request, res: Response, next: NextFunction) => {
    try
    {

    } catch (error)
    {

    }
}

export const manageMenteeRequests = async (req: Request, res: Response, next: NextFunction) => {
    try
    {

    } catch (error)
    {

    }
}