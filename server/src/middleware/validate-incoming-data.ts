import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";

export const validateIncomingData = (schema: ZodObject) => (request: Request, response: Response, next: NextFunction) => {
    const validateData = schema.safeParse(request.body)
    if (validateData.error) throw new Error(validateData.error.message)
    next()
}