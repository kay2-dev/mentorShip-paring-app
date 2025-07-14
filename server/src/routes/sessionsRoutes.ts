import { Router } from "express";

import { API_END_POINTS } from "../constant/constants";

export const sessionsRouter = Router();


sessionsRouter.get(API_END_POINTS.sessionsEndPoints.sessions, () => { });
sessionsRouter.get(API_END_POINTS.sessionsEndPoints.getAllSessionsForMentor, () => { });
sessionsRouter.get(API_END_POINTS.sessionsEndPoints.getAllSessionsForMentee, () => { });
sessionsRouter.get(API_END_POINTS.sessionsEndPoints.sessionsFeedbacks, () => { });
