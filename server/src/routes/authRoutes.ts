import express from 'express';
import { API_END_POINTS } from "../constant/constants";
import { login, register } from '../controller/authControlle';
import { validateIncomingData } from '../middleware/validate-incoming-data';
import { baseUserSchema, zodRegisterUserSchema } from '../lib/zod-validations-schema';

export const authRouter = express.Router()



// function post (path: string, handler: () => void) {

//     handler();
// }

// post('/', () => { });

authRouter.post(API_END_POINTS.authEndPoints.register, validateIncomingData(zodRegisterUserSchema), register);
authRouter.post(API_END_POINTS.authEndPoints.login, validateIncomingData(baseUserSchema), login);
authRouter.post(API_END_POINTS.authEndPoints.logout, () => { });

authRouter.get(API_END_POINTS.authEndPoints.me, () => { });