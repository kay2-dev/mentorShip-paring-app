import { Request, Response, NextFunction } from "express"
import { acceptMenteeRequestsService, getAllMentorsService, getAllRequestRecivedService, getAllRequestSentService, sendRequestToMentorsService } from "../service/mentor-ship-service"
import { TSendRequest, TUpdateRequestStatus } from "../lib/zod-validations-schema"


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
        await sendRequestToMentorsService(req.body as TSendRequest, req.user!)
        res.json({ message: 'request sent succefully' })
        next()
    } catch (error)
    {
        next(error)
    }
}

export const getAllRequestSent = async (req: Request, res: Response, next: NextFunction) => {
    try
    {
        const requestSent = await getAllRequestSentService(req.user!)
        res.status(200).json(requestSent)
        next()
    } catch (error)
    {
        next(error)
    }
}


export const getAllRequestsRecived = async (req: Request, res: Response, next: NextFunction) => {
    try
    {
        const requestReceived = await getAllRequestRecivedService(req.user!)
        res.status(200).json(requestReceived)
        next()
    } catch (error)
    {
        next(error)
    }
}


export const manageRequests = async (req: Request, res: Response, next: NextFunction) => {
    try
    {
        await acceptMenteeRequestsService(req.body as TUpdateRequestStatus)
        res.json({ message: 'action completed' })
    } catch (error)
    {
        next(error)
    }
}