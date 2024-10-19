import dbuser from '../models/user.js'

const getalluser = async (req, res) =>{
    const {username, location, age} = req.body
    try {
        const user = await dbuser.find(username, location, age)
        if (!user) {
            return res 
            .status(400)
            .json({
                message: 'User does not exist',
                status: 'Error',
                status_code: 400
            })
        }
        return res
        .status(200)
        .json({
            message: 'User found',
            status: 'success',
            status_code: 200,
            displayall: user
        })
    } catch(error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

const getbyId = async (req,res) =>{
    try{
        const getid = await dbuser.findById(req.params.id)
        if (!getid) {
            return res
            .status(400)
            .json({
                message: 'NOT FOUND',
                status: 'Error',
                status_code: 400
            })
        }
        return res
        .status(200)
        .json({
            message: 'USER FOUND',
            status: 'success',
            status_code:200,
            info:getid
        })
    }catch(error){

    }
}

const updateuser = async (req, res) => {
    try{
        const update = await dbuser.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!update) {
            return res 
            .status(400)
            .json({
                message: 'CHANGE NOT EFFECTIVE',
                status: 'Error',
                status_code: 400
            })
        }
        return res
        .status(200)
        .json({
            message: 'DONE',
            status: 'success',
            status_code:200,
            update
        })
    }catch(error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

const deletebyId = async (req,res) =>{
    try{
        const deleteby = await dbuser.findById(req.params.id)
        if (!deleteby) {
            return res
            .status(400)
            .json({
                message: 'USER DOES NOT EXIST',
                status: 'Error',
                status_code: 400
            })
        }
        return res
        .status(200)
        .json({
            message: 'USER DELETE',
            status: 'success',
            status_code:200
        })
    }catch(error){

    }
}

export  { getalluser, getbyId, updateuser, deletebyId }