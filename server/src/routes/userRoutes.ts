import { Router } from "express";
import { API_END_POINTS } from "../constant/constants";


export const userRouter = Router()


userRouter.get(API_END_POINTS.userProfilesEndPoints.userProfile, () => { })
userRouter.get(API_END_POINTS.userProfilesEndPoints.getUser)
userRouter.put(API_END_POINTS.userProfilesEndPoints.updateProfile)
