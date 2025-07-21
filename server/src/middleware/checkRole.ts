import { NextFunction, Request, Response } from "express";
import { TRoles, UserPayload } from "../types/user/user-types";
import { BadRequestError } from "../utils/app-error";

export const checkRole = (roles: TRoles) => (req: Request, res: Response, next: NextFunction) => {
    const { role } = req.user as UserPayload
    if (role !== roles) throw new BadRequestError()
    next()
}