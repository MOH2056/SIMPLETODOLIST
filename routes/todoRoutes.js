import express from 'express';
const router = express.Router();
import { createlist, getlist, updatelist, deletelist } from '../controllers/todoController.js';



router.post('/todo', createlist)
router.get('/todo/:id', getlist)
router.put('/todo/:id', updatelist)
router.delete('/todo/:id', deletelist)


export default router;