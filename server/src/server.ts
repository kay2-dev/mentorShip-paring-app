import app from './app';
import { authRouter } from './routes/authRoutes';





app.listen(3000, () => {
    console.log('Server is running on port 3000');
})