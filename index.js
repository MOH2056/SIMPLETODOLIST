require ('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./db')
const PORT = process.env.PORT;
connectDB();

app.use(express.json());
app.use('/', require('./routes/todoRoutes'));
app.use('/', require('./routes/authRoutes'));
app.use('/', require('./routes/userRoutes'));

app.listen(PORT, (req, res) => {
    console.log(`server is running on ${PORT}....`)
});

