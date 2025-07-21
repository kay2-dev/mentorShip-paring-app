import { Router } from "express";

import { API_END_POINTS } from "../constant/constants";
import { authGuard } from "../middleware/auth-Guard";
import { getAllMentors, sendRequestToMentors, getAllRequestSent, getAllRequestsRecived, manageRequests } from "../controller/mentorshpController";
import { validateIncomingData } from "../middleware/validate-incoming-data";
import { zodSendRequest, zodUpdateRequestStatus } from "../lib/zod-validations-schema";
import { checkRole } from "../middleware/checkRole";

export const mentorRouter = Router();

mentorRouter.get(API_END_POINTS.mentorShipRequestsEndPoints.mentors, authGuard, checkRole("mentee"), getAllMentors);
mentorRouter.get(API_END_POINTS.mentorShipRequestsEndPoints.requestSent, authGuard, checkRole("mentee"), getAllRequestSent);
mentorRouter.get(API_END_POINTS.mentorShipRequestsEndPoints.requestReceived, authGuard, checkRole("mentor"), getAllRequestsRecived);
mentorRouter.post(API_END_POINTS.mentorShipRequestsEndPoints.request, authGuard, validateIncomingData(zodSendRequest), checkRole("mentee"), sendRequestToMentors);
mentorRouter.put(API_END_POINTS.mentorShipRequestsEndPoints.requestStatusUpdate, authGuard, validateIncomingData(zodUpdateRequestStatus), checkRole("mentor"), manageRequests);