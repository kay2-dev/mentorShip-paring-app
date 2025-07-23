import { Router } from "express";
import { API_END_POINTS } from "../../../constant/constants";
import { zodSendRequest, zodUpdateRequestStatus } from "../../../lib/zod-validations-schema";
import { authGuard } from "../../../middleware/auth-Guard";
import { checkRole } from "../../../middleware/checkRole";
import { validateIncomingData } from "../../../middleware/validate-incoming-data";
import { getAllMentors, getAllRequestSent, getAllRequestsRecived, sendRequestToMentors, manageRequests } from "../controller/mentorshpController";



export const mentorRouter = Router();

mentorRouter.get(API_END_POINTS.mentorShipRequestsEndPoints.mentors, authGuard, checkRole("mentee"), getAllMentors);
mentorRouter.get(API_END_POINTS.mentorShipRequestsEndPoints.requestSent, authGuard, checkRole("mentee"), getAllRequestSent);
mentorRouter.get(API_END_POINTS.mentorShipRequestsEndPoints.requestReceived, authGuard, checkRole("mentor"), getAllRequestsRecived);
mentorRouter.post(API_END_POINTS.mentorShipRequestsEndPoints.request, authGuard, checkRole("mentee"), validateIncomingData(zodSendRequest), sendRequestToMentors);
mentorRouter.put(API_END_POINTS.mentorShipRequestsEndPoints.requestStatusUpdate, authGuard, checkRole("mentor"), validateIncomingData(zodUpdateRequestStatus), manageRequests);