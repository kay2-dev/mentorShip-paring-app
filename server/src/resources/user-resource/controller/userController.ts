import { Request, Response, NextFunction } from "express"
import { NewProfile, UpdateUser, UpdateUserProfile } from "../../../types/user/user-types"
import { BadRequestError } from "../../../utils/app-error"
import { createUserProfileService, findOneUserService, getLoggedInUserService, updateUserService, updateUserProfileService } from "./user-service"

// TODO GET ALL USERS MENTORS
// TODO GET ALL MENTEE USERS
// TODO ADD RATE LIMIT
export const createUserProfile = async (req: Request, res: Response, next: NextFunction) => {
    try
    {
        await createUserProfileService(req.body as NewProfile, req.user!)
        res.status(201).json({
            message: 'profile sucessfully created'
        })
        next()
    } catch (error: any)
    {
        next(new BadRequestError(error.message))
    }
}

export const findOneUser = async (req: Request, res: Response, next: NextFunction) => {
    try
    {
        const userFound = await findOneUserService(req.params.id)
        res.status(200).json({ userFound })
        next()
    } catch (error)
    {
        next(error)
    }
}

export const getLoggedInUser = async (req: Request, res: Response, next: NextFunction) => {
    try
    {
        const loggedInUser = await getLoggedInUserService(req.user!)
        res.status(200).json({ loggedInUser })
        next()
    } catch (error)
    {
        next(error)
    }
}
export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try
    {
        await updateUserService(req.body as UpdateUser, req.user!)
        res.status(201).json({ message: 'update successful' })
        next()
    } catch (error)
    {
        next(error)
    }
}
export const updateUserProfile = async (req: Request, res: Response, next: NextFunction) => {
    try
    {
        await updateUserProfileService(req.body as UpdateUserProfile, req.user!)
        res.status(201).json({ message: 'update successfull' })
        next()
    } catch (error)
    {
        next(error)
    }
}
