require ('dotenv').config();
const express = require('express');
const userlogic = require('./routes/authRoutes');
const todoRoute = require('./routes/usersRoutes');
const connectDB = require('./db');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
connectDB();

// Routes
app.use('/api/auth/login', userlogic);    
app.use('/api/auth/register', userlogic); 
app.use('/api', todoRoute);         

app.listen(PORT, (req, res) => {
    console.log(`server is running on ${PORT}....`)
});