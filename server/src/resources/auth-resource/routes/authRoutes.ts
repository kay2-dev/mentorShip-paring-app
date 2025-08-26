import express from 'express';
import { login, refresh, register } from '../controller/authController';
import { API_END_POINTS } from '../../../constant/constants';
import { zodRegisterUserSchema, baseUserSchema } from '../../../lib/zod-validations-schema';
import { validateIncomingData } from '../../../middleware/validate-incoming-data';
;

export const authRouter = express.Router()



// function post (path: string, handler: () => void) {

//     handler();
// }

// post('/', () => { });

authRouter.post(API_END_POINTS.authEndPoints.register, validateIncomingData(zodRegisterUserSchema), register);
authRouter.post(API_END_POINTS.authEndPoints.login, validateIncomingData(baseUserSchema), login);
authRouter.post(API_END_POINTS.authEndPoints.logout, () => { });

authRouter.get(API_END_POINTS.authEndPoints.me, refresh);