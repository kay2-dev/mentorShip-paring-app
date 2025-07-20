import { JwtPayload } from "jsonwebtoken"
import { MentorShipRepository } from "../repository/mentor-ship-repository"
import { TSendRequest, TUpdateRequestStatus } from "../lib/zod-validations-schema"


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

export const sendRequestToMentorsService = async (sendRequest: TSendRequest, jwtPayload: JwtPayload) => {
    try
    {
        const { id } = jwtPayload
        return await mentorShipRepository.createRequest(id, sendRequest.mentorId)
    } catch (error)
    {
        throw error
    }
}

export const acceptMenteeRequestsService = async (updateStatusPayload: TUpdateRequestStatus) => {
    try
    {
        const { requestId, menteeId, status } = updateStatusPayload
        await mentorShipRepository.updateRequestStatus(requestId, status)
        await mentorShipRepository.addMentees(menteeId)
        await mentorShipRepository.deleteRequests(requestId)
    } catch (error)
    {
        throw error
    }
}

// TODO GET ALL REQUEST  FROM MENTEE TO MENTOR (FOR MENTOR)
// TODO GET ALL REQUEST SENT TO MENTOR FROM MENTEE (FOR MENTEE)
// create it in a way where the mentee can see the requests to the mentors

export const getAllRequestsService = async (jwtPayload: JwtPayload) => {
    try
    {
        const { id } = jwtPayload
        return await mentorShipRepository.getAllRequests(id)
    } catch (error)
    {
        throw error
    }
}