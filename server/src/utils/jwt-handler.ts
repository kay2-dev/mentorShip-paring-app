import jwt from 'jsonwebtoken'
import { config } from '../config/config'
import { UserPayload } from '../types/user/user-types'
import { email } from 'zod'

export const jwtHandler = {
    generateToken: (user: UserPayload) => {
        const acessToken = jwt.sign(user.email, config.JWT_SECRET, { expiresIn: '15m' })
        const refreshToken = jwt.sign(user.email, config.JWT_SECRET, { expiresIn: '7d', algorithm: 'ES512' })
        return { refreshToken, acessToken }
    },
    verify: (token: string) => {
        const decode = jwt.verify(token, config.JWT_SECRET)
        return decode
    }
}