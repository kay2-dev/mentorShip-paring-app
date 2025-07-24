import { JwtPayload } from "jsonwebtoken"
import { MentorShipRepository } from "../repository/mentor-ship-repository"
import { TSendRequest, TUpdateRequestStatus } from "../../../lib/zod-validations-schema"
import { BadRequestError } from "../../../utils/app-error"


// filters
// search




const mentorShipRepository = new MentorShipRepository()


// get mentors woth all their profiles
export const getAllMentorsService = async () => {
    try
    {
        return await mentorShipRepository.getAllMentors()
    } catch (error)
    {
        throw error
    }
}

// mentee sends a request to the mentors
// creating of request or sending of request
// this added to the request List waiting for confirmatin

// problems to solve if you send request to yourself.
// only mentees can send requests

export const sendRequestToMentorsService = async (sendRequest: TSendRequest, jwtPayload: JwtPayload) => {
    try
    {
        const { id } = jwtPayload
        const mentorsId = await mentorShipRepository.findMentor(id)
        const ifAlreadyFollowing = mentorsId.includes({ mentorId: sendRequest.mentorId })
        if (ifAlreadyFollowing) throw new BadRequestError('You are already following this mentor')
        return await mentorShipRepository.createRequest(sendRequest.mentorId, id)
    } catch (error)
    {
        throw error
    }
}

export const acceptMenteeRequestsService = async (requestId: string, updateStatusPayload: TUpdateRequestStatus) => {
    try
    {

        const { menteeId, status } = updateStatusPayload
        await mentorShipRepository.updateRequestStatus(parseInt(requestId), status)
        if (status === "accepted")
            await mentorShipRepository.addStatus(menteeId)
        await mentorShipRepository.deleteRequests(parseInt(requestId))
    } catch (error)
    {
        throw error
    }
}

// TODO GET ALL REQUEST  FROM MENTEE TO MENTOR (FOR MENTOR)
// TODO GET ALL REQUEST SENT TO MENTOR FROM MENTEE (FOR MENTEE)
// create it in a way where the mentee can see the requests to the mentors

export const getAllRequestSentService = async (jwtPayload: JwtPayload) => {
    try
    {
        const { id } = jwtPayload
        return await mentorShipRepository.getAllRequestsSent(id)
    } catch (error)
    {
        throw error
    }
}

export const getAllRequestRecivedService = async (jwtPayload: JwtPayload) => {
    try
    {
        const { id } = jwtPayload
        return await mentorShipRepository.getAllRequestsRecived(id)
    } catch (error)
    {
        throw error
    }
}