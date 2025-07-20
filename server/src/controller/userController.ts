import { Request, Response, NextFunction } from "express"
import { createUserProfileService, findOneUserService, getLoggedInUserService, updateUserService } from "../service/user-service"
import { NewProfile, UpdateUser } from "../types/user/user-types"
import { BadRequestError } from "../utils/app-error"

// profile creation
// getOne Profile
// update Perofile
// delete user

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
        console.log(req.params)
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
    } catch (error)
    {
        throw error
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