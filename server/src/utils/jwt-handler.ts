import jwt from 'jsonwebtoken'
import { config } from '../config/config'
import { UserPayload } from '../types/user/user-types'
import { email } from 'zod'

export const jwtHandler = {
    generateToken: (user: UserPayload) => {
        const { email } = user
        const acessToken = jwt.sign({ email }, config.JWT_SECRET, { expiresIn: '15m' })
        const refreshToken = jwt.sign({ email }, config.JWT_SECRET, { expiresIn: '7d', algorithm: "ES512" })
        return { refreshToken, acessToken }
    },
    verify: (token: string) => {
        const decode = jwt.verify(token, config.JWT_SECRET)
        return decode
    }
}