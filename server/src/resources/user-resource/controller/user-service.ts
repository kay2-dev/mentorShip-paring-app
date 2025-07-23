import { JwtPayload } from "jsonwebtoken";
import { UserRepository } from "../repository/user-repository";
import { NewProfile, UpdateUser, UpdateUserProfile } from "../../../types/user/user-types";
import { BadRequestError } from "../../../utils/app-error";



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

export const findOneUserService = async (id: string) => {
    try
    {
        const userFound = await userRepository.getUser(parseInt(id))
        // TODO LOOK FOR A BEETER WAY TO DO THIS
        if (!userFound.email) throw new BadRequestError('No User Found')
        return userFound
    } catch (error)
    {
        throw error
    }
}

export const getLoggedInUserService = async (jwtPayload: JwtPayload) => {

    try
    {
        const { id } = jwtPayload
        return await userRepository.getUser(id)
    } catch (error)
    {
        throw error
    }
    // i need to omit the password
}

export const updateUserService = async (user: UpdateUser, jwtPayload: JwtPayload) => {
    try
    {
        const { id } = jwtPayload
        await userRepository.updateUser(id, user)
    } catch (error)
    {
        throw error
    }
}

export const updateUserProfileService = async (profileUpdateData: UpdateUserProfile, jwtPayload: JwtPayload) => {
    try
    {
        const { id } = jwtPayload
        await userRepository.updateUserProfile(id, profileUpdateData)
    } catch (error)
    {
        throw error
    }
}

