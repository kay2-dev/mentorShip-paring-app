import { Request, Response, NextFunction } from "express"
import { getAllMentorsService, sendRequestToMentorsService } from "../service/mentor-ship-service"
import { TRequestBody } from "../types/user/user-types"


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
        await sendRequestToMentorsService(req.body as number, req.user!)
        res.json({ message: 'request sent succefully' })
        next()
    } catch (error)
    {
        throw error
    }
}

export const manageMenteeRequests = async (req: Request, res: Response, next: NextFunction) => {
    try
    {

    } catch (error)
    {

    }
}