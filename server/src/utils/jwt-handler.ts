import jwt from 'jsonwebtoken'
import { config } from '../config/config'

export const jwtHandler = {
    generateToken: (email: string) => {
        const acessToken = jwt.sign({ email }, config.JWT_SECRET, { expiresIn: '15m' })
        const refreshToken = jwt.sign({ email }, config.JWT_SECRET, { expiresIn: '7d', algorithm: 'ES512' })
        return { refreshToken, acessToken }
    }
}