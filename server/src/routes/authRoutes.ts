import express from 'express';
import { API_END_POINTS } from "../constant/constants";
import { login, register } from '../controller/authControlle';

export const authRouter = express.Router()



// function post (path: string, handler: () => void) {

//     handler();
// }

// post('/', () => { });

authRouter.post(API_END_POINTS.authEndPoints.register, register);
authRouter.post(API_END_POINTS.authEndPoints.login, login);
authRouter.post(API_END_POINTS.authEndPoints.logout, () => { });

authRouter.get(API_END_POINTS.authEndPoints.me, () => { });