import { JwtPayload } from "jsonwebtoken";
import { UserRepository } from "../repository/user-repository";
import { NewProfile } from "../types/user/user-types";


const userRepository = new UserRepository()

export const createUserProfileService = async (userProfile: NewProfile, JwtPayload: JwtPayload) => {
    try
    {
        const { id } = JwtPayload
        await userRepository.createUserProfile(userProfile, id)
    } catch (error: any)
    {
        throw error
    }
}

