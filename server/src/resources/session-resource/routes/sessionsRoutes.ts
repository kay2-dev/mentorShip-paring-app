import { Router } from "express";
import { API_END_POINTS } from "../../../constant/constants";
import { bookSessionController, getSessionController, updateSessionController } from "../controller/session-controller";
import { authGuard } from "../../../middleware/auth-Guard";
import { checkRole } from "../../../middleware/checkRole";
import { validateIncomingData } from "../../../middleware/validate-incoming-data";
import { zodBookSessionSchema } from "../../../lib/zod-validations-schema";


export const sessionsRouter = Router();




sessionsRouter.post(API_END_POINTS.sessionsEndPoints.sessions, authGuard, checkRole("mentee"), validateIncomingData(zodBookSessionSchema), bookSessionController);
// sessionsRouter.get(API_END_POINTS.sessionsEndPoints.getAllSessionsForMentor, authGuard, checkRole() createSessionController);
// sessionsRouter.put(API_END_POINTS.sessionsEndPoints.getAllSessionsForMentee, updateSessionController);
// sessionsRouter.get(API_END_POINTS.sessionsEndPoints.sessionsFeedbacks, () => { });


