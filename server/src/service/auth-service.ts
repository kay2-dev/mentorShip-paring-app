import bcrypt from 'bcrypt'
import { NewUsers, User } from '../types/user/user-types';
import { config } from '../config/config';
import jwt from 'jsonwebtoken'
import { UserRepository } from '../repository/user-repository';
import { jwtHandler } from '../utils/jwt-handler';
import { BadRequestError } from '../utils/app-error';


const users: User[] = []


const userRepository = new UserRepository()

export async function registerUserService (userData: User) {    //  check if user already exists

    try
    {
        const hashedPassword = await bcrypt.hash(userData.password, 10)
        await userRepository.createUser({ ...userData, password: hashedPassword })
    } catch (error)
    {
        throw error
    }

}



// TODO PROPER ERROR HANDLING
export async function loginUserService (userData: User) {
    //  check if user already exists

    try
    {
        const existingEmail = await userRepository.findUserByEmail(userData.email)
        const isPasswordValid = existingEmail && bcrypt.compareSync(userData.password, existingEmail[ 0 ].password);
        if (!existingEmail || !isPasswordValid)
            throw new BadRequestError('invalid credentials')
        const jwtObject = {
            id: existingEmail[ 0 ].id,
        }
        return jwtHandler.generateToken(jwtObject)
    } catch (error: any)
    {
        throw new BadRequestError(error.message)
    }
}




// TODO WORK ON THIS FUNCTION TO GET AUTHENTICATED USER

export async function getUserService (email: string) {
    try
    {

    } catch (error)
    {

    }
    const user = users.find((user) => user.email === email);
    if (!user) throw new Error('User not found');
    return user;
}