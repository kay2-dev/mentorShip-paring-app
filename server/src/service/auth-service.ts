import bcrypt from 'bcrypt'
import { User } from '../types/user/user-types';
import { config } from '../config/config';
import jwt from 'jsonwebtoken'


const users: User[] = []




export function registerUserService (userData: User) {
    //  check if user already exists

    const existingUser = users.find((user) => user.email === userData.email);

    if (existingUser)
        throw new Error('User already exists');

    const hashedPassword = bcrypt.hashSync(userData.password, 10)

    const newUser: User = {
        ...userData,
        password: hashedPassword
    };

    users.push(newUser);
    const jwtObject = {
        email: newUser.email
    }

    const token = jwt.sign(jwtObject, config.JWT_SECRET, { expiresIn: '1h' });

    return token;
}



export function loginUserService (userData: User) {
    //  check if user already exists

    const existingEmail = users.find((user) => user.email === userData.email);

    const isPasswordValid = existingEmail && bcrypt.compareSync(userData.password, existingEmail.password);

    if (!existingEmail || !isPasswordValid)
        throw new Error('invalid credentials')

    const jwtObject = {
        email: existingEmail.email,
    }
    const token = jwt.sign(jwtObject, config.JWT_SECRET, { expiresIn: '1h' });

    return token;
}