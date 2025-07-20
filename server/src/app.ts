
import express from 'express';
import { authRouter } from './routes/authRoutes';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import { userRouter } from './routes/userRoutes';





const app = express();

app.use(cors({
    origin: '*',
    credentials: true
}))


app.use(cookieParser())
app.use(express.json());

app.use('/api/v1', authRouter)
app.use('/api/v1', userRouter)


export default app;



