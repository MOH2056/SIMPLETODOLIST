const express = require('express');
const router = express.Router();
const { createlist, getlist, updatelist, deletelist } = require('../controllers/userController')



router.post('/', createlist)
router.get('/:id', getlist)
router.put('/:id', updatelist)
router.delete('/:id', deletelist)


module.exports = router;