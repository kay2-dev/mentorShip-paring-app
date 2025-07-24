import { NextFunction, Request, Response } from "express";
import { TRoles, UserPayload } from "../types/user/user-types";
import { BadRequestError, UnAuthorisedRequestError } from "../utils/app-error";
import { UserRepository } from "../resources/user-resource/repository/user-repository";


const userRepository = new UserRepository()

export const checkRole = (role: TRoles) => async (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.user as UserPayload
    try
    {
        const users = await userRepository.getUser(id)
        if (!users.email) throw new BadRequestError()
        if (role !== users.roles) throw new UnAuthorisedRequestError(`You must be a ${ role } to continue this request`)
        next()
    } catch (error)
    {
        next(error)
    }
}