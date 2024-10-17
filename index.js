require ('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./db')
const PORT = 5000;
connectDB();

app.use(express.json());
app.use('/user', require('./routes/userRoutes'));
app.use('/', require('./routes/todolistRoutes'));

app.listen(PORT, (req, res) => {
    console.log(`server is running on ${PORT}....`)
});