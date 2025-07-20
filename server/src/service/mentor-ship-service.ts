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

export const sendRequestToMentorsService = async () => {

}

export const acceptMenteeRequestsService = async () => {

}