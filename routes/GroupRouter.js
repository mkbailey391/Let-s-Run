const express = require('express');
    router = express.Router();
    Group = require('../controllers/Group');
    verifyToken = require('./serverAuth').verifyToken;


router.get('/', Group.index);
router.get('/:id', Group.show);

// PROTECTED ROUTES
router.use(verifyToken);
router.post('/', Group.create);
router.patch('/:id', Group.update);
router.delete('/:id', Group.delete);
router.post('/:id/users', Group.joinGroup); // Action for having current User join a group based JWT.
router.delete('/:id/users', Group.leaveGroup); // Action for delete current user from group based JWT.
// Do I need to verify token for deleting a group? 


module.exports = router;