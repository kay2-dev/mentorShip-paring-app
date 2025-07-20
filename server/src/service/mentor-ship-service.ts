import { MentorShipRepository } from "../repository/mentor-ship-repository"


// filters
// search


const mentorShipRepository = new MentorShipRepository()

export const getAllMentorsService = async () => {
    return await mentorShipRepository.getAllMentors()
}

export const sendRequestToMentorsService = async () => {

}

export const acceptMenteeRequestsService = async () => {

}