import express from 'express'
const router = express.Router()
import {getalluser, updateuser, getbyId, deletebyId} from '../controllers/userController.js'

router.get('/getuser', getalluser);
router.put('/updateuser/:id', updateuser);
router.get('/finduser/:id', getbyId);
router.delete('/deleteuser/:id', deletebyId);

export default router;