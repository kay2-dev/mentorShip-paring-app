import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";
import { BadRequestError } from "../utils/app-error";

export const validateIncomingData = (schema: ZodObject) => (request: Request, response: Response, next: NextFunction) => {
    const validateData = schema.safeParse(request.body)
    if (validateData.error) throw new BadRequestError(validateData.error.message)
    next()
}