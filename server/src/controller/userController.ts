import { Request, Response, NextFunction } from "express"
import { createUserProfileService } from "../service/user-service"
import { NewProfile } from "../types/user/user-types"
import { BadRequestError } from "../utils/app-error"

// profile creation
// getOne Profile
// update Perofile
// delete user

export const createUserProfile = async (req: Request, res: Response, next: NextFunction) => {
    try
    {
        await createUserProfileService(req.body as NewProfile, req.user!)
        next()
    } catch (error: any)
    {
        next(new BadRequestError(error.message))
    }
}
const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try
    {

    } catch (error)
    {

    }
}
const getOneProfile = async (req: Request, res: Response, next: NextFunction) => {
    try
    {

    } catch (error)
    {

    }
}
const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try
    {

    } catch (error)
    {

    }
}