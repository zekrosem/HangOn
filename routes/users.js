var express = require('express');
var router = express.Router();
var UserController = require('../controllers/user.controller')


/* POST login infos*/
router.post('/', UserController.postLoginUser);

module.exports = router;
