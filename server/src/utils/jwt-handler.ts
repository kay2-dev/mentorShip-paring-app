import jwt from 'jsonwebtoken'
import { config } from '../config/config'
import { UserPayload } from '../types/user/user-types'

export const jwtHandler = {
    generateToken: (user: UserPayload) => {
        const { id, role } = user
        const acessToken = jwt.sign({ id, role }, config.JWT_SECRET, { expiresIn: '1m' })
        const refreshToken = jwt.sign({ id }, config.JWT_SECRET, { expiresIn: '7d', algorithm: "HS384" })
        return { refreshToken, acessToken }
    },
    verify: (token: string) => {
        const decode = jwt.verify(token, config.JWT_SECRET)
        return decode
    }
}