import { Router } from "express";

import { API_END_POINTS } from "../constant/constants";
import { authGuard } from "../middleware/auth-Guard";
import { getAllMentors, sendRequestToMentors, getAllRequestSent, getAllRequestsRecived, manageRequests } from "../controller/mentorshpController";
import { validateIncomingData } from "../middleware/validate-incoming-data";
import { zodSendRequest } from "../lib/zod-validations-schema";

export const mentorRouter = Router();

mentorRouter.get(API_END_POINTS.mentorShipRequestsEndPoints.mentors, authGuard, getAllMentors);
mentorRouter.post(API_END_POINTS.mentorShipRequestsEndPoints.request, authGuard, validateIncomingData(zodSendRequest), sendRequestToMentors);
mentorRouter.get(API_END_POINTS.mentorShipRequestsEndPoints.requestSent, authGuard, getAllRequestSent);
mentorRouter.get(API_END_POINTS.mentorShipRequestsEndPoints.requestReceived, authGuard, getAllRequestsRecived);
mentorRouter.put(API_END_POINTS.mentorShipRequestsEndPoints.requestStatusUpdate, authGuard, manageRequests);