import express from 'express';
import exampleRouter from './routes/example.route';
import userRouter from './routes/user.route';

const app = express();
app.use(express.json());

app.use('/api/example', exampleRouter);
app.use('/api/example2', exampleRouter);
app.use('/api/users', userRouter);

export default app;
