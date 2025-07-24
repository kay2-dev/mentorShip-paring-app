import { Router } from "express";
import { API_END_POINTS } from "../../../constant/constants";
import { createSessionController, getSessionController, updateSessionController } from "../controller/session-controller";


export const sessionsRouter = Router();




sessionsRouter.get(API_END_POINTS.sessionsEndPoints.sessions, getSessionController);
sessionsRouter.post(API_END_POINTS.sessionsEndPoints.getAllSessionsForMentor, createSessionController);
sessionsRouter.put(API_END_POINTS.sessionsEndPoints.getAllSessionsForMentee, updateSessionController);
sessionsRouter.get(API_END_POINTS.sessionsEndPoints.sessionsFeedbacks, () => { });


