
import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import { authRouter } from './resources/auth-resource/routes/authRoutes';
import { mentorRouter } from './resources/mentor-ship-resource/routes/mentor';
import { userRouter } from './resources/user-resource/routes/userRoutes';




const app = express();

app.use(cors({
    origin: '*',
    credentials: true
}))


app.use(cookieParser())
app.use(express.json());

app.use('/api/v1', authRouter)
app.use('/api/v1', userRouter)
app.use('/api/v1', mentorRouter)


export default app;



