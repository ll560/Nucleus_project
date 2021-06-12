const express = require('express');
const router = express.Router();
const connectController = require('../controllers/connectController');

//survey
router.route('/')
    .post(connectController.connect_post);

router.route('/show')
    .get(connectController.connect_get);



module.exports = router;