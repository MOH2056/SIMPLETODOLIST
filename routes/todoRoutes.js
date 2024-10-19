const express = require('express');
const router = express.Router();
const { createlist, getlist, updatelist, deletelist } = require('../controllers/todoController')



router.post('/todo', createlist)
router.get('/todo/:id', getlist)
router.put('/todo/:id', updatelist)
router.delete('/todo/:id', deletelist)


module.exports = router;