const User = require('../models/user');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const registerUser = async (req, res) => {
    const {username, password, location, age} = req.body
    if (!username || !password || !location || !age) {
        return res
        .status(400)
        .json({
            message: 'Required',
            status: 'Error',
            status_code: 400,
        });  
    }
        
    try {
        const existingUser = await User.findOne({username});
        if (existingUser) {
              return res
              .status(409)
              .json({
                message: 'User already exist',
                status: 'Error',
                status_code: 400,
            });
        }
       const hashedPwd = await bcrypt.hash(password, 10)
       const newUser = new User({username, "password": hashedPwd, location, age});
       //const newUser = new User({username, password});
       await newUser.save();
        
        return res.status(201).json({
            message: "User successsfully created",
            status: "success",
            status_code: "201",
            user: newUser,
        });
} catch (error) {
     console.log(`An error occured: ${error.message}`);
     return res
     .status(500)
     .json({message: `An error occured: ${error.message}`});
    }
};

const loginUser = async (req, res) => {
    const {username, password} = req.body;
    if (!username || !password) {
        return res
        .status(400)
        .json({
            message: 'Provide username and password',
            status: 'Error',
            status_code: 400,
        });  
    }
    try {
        const existingUser = await User.findOne(username)
        if(existingUser) {
            return res
            .status(400)
            .json({message: "user not registered", status: 'Error', status_code: 400})
        }
        
        const hashedPass = await bcrypt.compare(password, existingUser.password)
        if (!hashedPass) 
            return res.status(400).json({
                message: 'Incorrect username or password',
                status: 'Error',
                status_code: 400,
            });
            const { password: hashedPassword, ...userWithoutPassword } = existingUser.toObject()
            const payload = {
                userId: existingUser._id,
                username: existingUser.username
            }
            const access_token = jwt.sign(payload, process.env.SECRET_KEY)
            return res
            .status(200)
            .json({
            message: 'user logged in successfully',
            status: 'success',
            status_code: 200,
            access_token,
            user: userWithoutPassword
        });
            
    } catch(error) {
        console.error("Login error:", error); // Log the error for debugging
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { registerUser, loginUser };