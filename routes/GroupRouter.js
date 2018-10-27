const express = require('express');
    router = express.Router();
    Group = require('../controllers/Group');

router.get('/', Group.index);
router.post('/', Group.create);

module.exports = router;