import { JwtPayload } from "jsonwebtoken";
import { SessionRepository } from "../repository/session-repository";
import { NewAvaliability, NeWSessionPayload } from "../../../types/user/user-types";
import { TSession } from "../../../lib/zod-validations-schema";
import { BadRequestError } from "../../../utils/app-error";




// using one service file for the both
const sessionRepository = new SessionRepository()

export const setAvailabiltyService = async (jwtPayLoad: JwtPayload, availabilityData: NewAvaliability) => {
    try
    {
        const { id } = jwtPayLoad
        return await sessionRepository.setAvailabiltBlock({ ...availabilityData, mentorId: id })
    } catch (error)
    {
        throw error
    }
}

export const getAvailabiltyService = async (jwtPayLoad: JwtPayload) => {
    try
    {
        const { id } = jwtPayLoad
        return await sessionRepository.getAvailbility(id)
    } catch (error)
    {
        throw error
    }
}


// TODO UPDATE AND DELETE
/*
.
.
.
*/


// if there is already a session booked at that avaliability time


// from now on i will be calling my data payload
// we by the  actually choosing a slot which would be chosen by the id of the slot 
export const bookSessionService = async (jwtPayLoad: JwtPayload, sessionPayload: TSession) => {

    const { id } = jwtPayLoad
    const { slotId } = sessionPayload
    const slot = await sessionRepository.getOneAvailbility(slotId)

    if (!slot) throw new BadRequestError('Could not find slot')
    const { endTime, mentorId, startTime } = slot

    await sessionRepository.createSession({ startTime, menteeId: id, mentorId, endTime, })
    await sessionRepository.updateAvalibiity(slotId, { bookedStatus: 'booked' })

} 