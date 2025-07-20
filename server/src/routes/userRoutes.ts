import { Router } from "express";
import { API_END_POINTS } from "../constant/constants";
import { createUserProfile } from "../controller/userController";
import { authGuard } from "../middleware/auth-Guard";
import { validateIncomingData } from "../middleware/validate-incoming-data";
import { zodProfileSchema } from "../lib/zod-validations-schema";


export const userRouter = Router()


userRouter.post(
    API_END_POINTS.userProfilesEndPoints.createUserProfile,
    authGuard,
    validateIncomingData(zodProfileSchema),
    createUserProfile
)
userRouter.get(API_END_POINTS.userProfilesEndPoints.userProfile, () => { })
userRouter.get(API_END_POINTS.userProfilesEndPoints.getUser, () => { })
userRouter.put(API_END_POINTS.userProfilesEndPoints.updateProfile, () => { })
