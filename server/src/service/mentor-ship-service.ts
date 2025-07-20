import { JwtPayload } from "jsonwebtoken"
import { MentorShipRepository } from "../repository/mentor-ship-repository"


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

export const sendRequestToMentorsService = async (jwtPayload: JwtPayload) => {
    try
    {
        const { id } = jwtPayload
        return await mentorShipRepository.createRequest(id)
    } catch (error)
    {
        throw error
    }
}

export const acceptMenteeRequestsService = async () => {

}