import { Router } from "express";

import { API_END_POINTS } from "../constant/constants";
import { authGuard } from "../middleware/auth-Guard";
import { getAllMentors } from "../controller/mentorshpController";

export const mentorRouter = Router();

mentorRouter.get(API_END_POINTS.mentorShipRequestsEndPoints.mentors, authGuard, getAllMentors);
mentorRouter.get(API_END_POINTS.mentorShipRequestsEndPoints.request, () => { });
mentorRouter.get(API_END_POINTS.mentorShipRequestsEndPoints.requestSent, () => { });
mentorRouter.get(API_END_POINTS.mentorShipRequestsEndPoints.requestReceived, () => { });
mentorRouter.put(API_END_POINTS.mentorShipRequestsEndPoints.requestStatusUpdate, () => { });