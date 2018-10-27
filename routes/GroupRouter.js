const express = require('express');
    router = express.Router();
    Group = require('../controllers/Group');

router.get('/', Group.index);
router.post('/', Group.create);
router.get('/:id', Group.show);
router.patch('/:id', Group.update);
router.delete('/:id', Group.delete);

module.exports = router;