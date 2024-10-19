const express = require('express')
const router = express.Router()
const {getalluser, updateuser, getbyId, deletebyId} = require('../controllers/userController')

router.get('/getuser', getalluser);
router.put('/updateuser/:id', updateuser);
router.get('/finduser/:id', getbyId);
router.delete('/deleteuser/:id', deletebyId);

module.exports = router;