import z from "zod";
import { requestStatusEnum, userEnum } from "../db/schema";

const refineDate = (val: string) => !isNaN(Date.parse(val))

// TODO ADD Email RegExp && password ReqExp


export const baseUserSchema = z.object({
    email: z.email({ message: 'A Valid Email Required' }),
    password: z.string().min(3, { message: 'Password must be at least 3' }),
})

export const zodRegisterUserSchema = baseUserSchema.extend({
    confirmPassword: z.string().min(3, { message: 'Password must be at least 3' }),
    roles: z.enum(userEnum.enumValues)
}).refine((data) => data.password === data.confirmPassword, { path: [ 'confirmPassword' ], message: 'Password does not match' })

export const zodProfileSchema = z.object({
    bio: z.string(),
    skills: z.array(z.string()),
    goals: z.array(z.string())
})

export const zodUpdateProdileSchema = zodProfileSchema.extend({}).partial()


export const zodAvailabilitySchema = z.object({
    date: z.string().refine(refineDate, {
        message: 'invalid date'
    }),
    start: z.string(),
    end: z.string()
})

export const zodSessionSchema = z.object({
    date: z.string().refine(refineDate, { message: 'invalid date' }),
    feedBack: z.string(),
    rating: z.number()
})

export const zodSendRequest = z.object({ mentorId: z.number() })

export const zodUpdateRequestStatus = z.object({
    menteeId: z.number(),
    status: z.enum(requestStatusEnum.enumValues)
})

export type TSendRequest = z.infer<typeof zodSendRequest>
export type TUpdateRequestStatus = z.infer<typeof zodUpdateRequestStatus>