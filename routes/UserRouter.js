const 
    express = require('express'),
    router = express.Router(),
    verfiyToken = require('./serverAuth').verifyToken,
    User = require('../controllers/User');

router.get('/', User.index);
router.post('/', User.create);
userRouter.post('/authenticate', User.authenticate)
router.use(verifyToken);

router.get('/:id', User.show);
router.patch('/:id', User.update);
router.delete('/:id', User.delete);

module.exports = router;