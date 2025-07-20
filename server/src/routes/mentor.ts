import { Router } from "express";

import { API_END_POINTS } from "../constant/constants";
import { authGuard } from "../middleware/auth-Guard";
import { getAllMentors, sendRequestToMentors, getAllRequestSent, getAllRequestsRecived, manageRequests } from "../controller/mentorshpController";

export const mentorRouter = Router();

mentorRouter.get(API_END_POINTS.mentorShipRequestsEndPoints.mentors, authGuard, getAllMentors);
mentorRouter.get(API_END_POINTS.mentorShipRequestsEndPoints.request, authGuard, sendRequestToMentors);
mentorRouter.get(API_END_POINTS.mentorShipRequestsEndPoints.requestSent, authGuard, getAllRequestSent);
mentorRouter.get(API_END_POINTS.mentorShipRequestsEndPoints.requestReceived, authGuard, getAllRequestsRecived);
mentorRouter.put(API_END_POINTS.mentorShipRequestsEndPoints.requestStatusUpdate, authGuard, manageRequests);