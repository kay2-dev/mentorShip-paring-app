import { Router } from "express";
import { createUserProfile, getLoggedInUser, findOneUser, updateUserProfile } from "../controller/userController";
import { API_END_POINTS } from "../../../constant/constants";
import { zodProfileSchema } from "../../../lib/zod-validations-schema";
import { authGuard } from "../../../middleware/auth-Guard";
import { validateIncomingData } from "../../../middleware/validate-incoming-data";



export const userRouter = Router()


userRouter.post(
    API_END_POINTS.userProfilesEndPoints.createUserProfile,
    authGuard,
    validateIncomingData(zodProfileSchema),
    createUserProfile
)
userRouter.get(API_END_POINTS.userProfilesEndPoints.userProfile, authGuard, getLoggedInUser)
userRouter.get(API_END_POINTS.userProfilesEndPoints.getUser, authGuard, findOneUser)
userRouter.put(API_END_POINTS.userProfilesEndPoints.updateProfile, authGuard, updateUserProfile)
