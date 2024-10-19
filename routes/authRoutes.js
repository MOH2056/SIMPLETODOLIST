import express from 'express';
const router = express.Router();
import { registerUser, loginUser } from '../controllers/authController.js';



router.post('/auth/register', registerUser)
router.post('/auth/login', loginUser)


export default router;