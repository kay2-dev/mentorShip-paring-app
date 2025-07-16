
import express from 'express';
import { authRouter } from './routes/authRoutes';
import cors from 'cors'
import cookieParser from 'cookie-parser';





const app = express();

app.use(cors({
    origin: '*',
    credentials: true
}))


app.use(cookieParser())
app.use(express.json());

app.use('/api/v1', authRouter)


export default app;



