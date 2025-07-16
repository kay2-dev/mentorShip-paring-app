import bcrypt from 'bcrypt'
import { NewUsers, User } from '../types/user/user-types';
import { config } from '../config/config';
import jwt from 'jsonwebtoken'
import { UserRepository } from '../repository/user-repository';


const users: User[] = []


const userRepository = new UserRepository()

export async function registerUserService (userData: NewUsers) {
    //  check if user already exists

    try
    {

        const hashedPassword = await bcrypt.hash(userData.password, 10)
        const newUser = await userRepository.createUser({ ...userData, password: hashedPassword })

        console.log(newUser[ 0 ])


        const token = jwt.sign({ email: newUser[ 0 ].email }, config.JWT_SECRET, { expiresIn: '1h' })

        console.log(token)
        return token

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
            throw new Error('invalid credentials')
        const jwtObject = {
            email: existingEmail[ 0 ].email,
        }
        const token = jwt.sign(jwtObject, config.JWT_SECRET, { expiresIn: '1h' });
        return token;

    } catch (error)
    {
        throw error
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