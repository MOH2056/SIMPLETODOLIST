import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import connectD from './db.js';
import todoroute from './routes/todoRoutes.js'
import authroute from './routes/authRoutes.js'
import userroute from './routes/userRoutes.js'
const PORT = process.env.PORT || 3000;
connectD();

app.use(express.json());
app.use('/', todoroute);
app.use('/', authroute);
app.use('/', userroute);

app.listen(PORT, (req, res) => {
    console.log(`server is running on ${PORT}....`)
});

