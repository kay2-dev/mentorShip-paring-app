import { Router } from "express";
import { API_END_POINTS } from "../../../constant/constants";
import { deleteAvalibilityController, getAvalibilityController, setAvalibilityController, updateAvalibilityController } from "../controller/avalibility-controller";


export const availabilityRouter = Router();




availabilityRouter.get(API_END_POINTS.availabilityEndPoints.getAllAvaliability, getAvalibilityController);
availabilityRouter.post(API_END_POINTS.availabilityEndPoints.createAvaliability, setAvalibilityController);
availabilityRouter.put(API_END_POINTS.availabilityEndPoints.updateAvliability, updateAvalibilityController);
availabilityRouter.delete(API_END_POINTS.availabilityEndPoints.updateAvliability, deleteAvalibilityController);


