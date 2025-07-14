import { Router } from "express";

import { API_END_POINTS } from "../constant/constants";

export const mentorRouter = Router();

mentorRouter.get(API_END_POINTS.mentorShipRequestsEndPoints.request, () => { });
mentorRouter.get(API_END_POINTS.mentorShipRequestsEndPoints.requestSent, () => { });
mentorRouter.get(API_END_POINTS.mentorShipRequestsEndPoints.requestReceived, () => { });
mentorRouter.put(API_END_POINTS.mentorShipRequestsEndPoints.requestStatusUpdate, () => { });