import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserRepository } from '../../user-resource/repository/user-repository'
import { NewUsers, User } from '../../../types/user/user-types'
import { BadRequestError } from '../../../utils/app-error'
import { jwtHandler } from '../../../utils/jwt-handler'





const userRepository = new UserRepository()

export async function registerUserService (userData: NewUsers) {    //  check if user already exists

    try
    {
        const hashedPassword = await bcrypt.hash(userData.password, 10)
        await userRepository.createUser({ ...userData, password: hashedPassword })
    } catch (error)
    {
        throw error
    }

}




export async function loginUserService (userData: User) {

    try
    {
        const existingEmail = await userRepository.findUserByEmail(userData.email)
        const isPasswordValid = existingEmail.length !== 0 && bcrypt.compareSync(userData.password, existingEmail[ 0 ].password);
        if (existingEmail.length === 0 || !isPasswordValid)
            throw new BadRequestError('invalid credentials')
        const jwtObject = {
            id: existingEmail[ 0 ].id,
            role: existingEmail[ 0 ].roles
        }
        return jwtHandler.generateToken(jwtObject)
    } catch (error: any)
    {
        throw new BadRequestError(error.message)
    }
}
