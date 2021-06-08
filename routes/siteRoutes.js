const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

router.route('/').get(siteController.all);

router.route('/about').get(siteController.about_get);


router.route('/login')
    .post(siteController.login_post)

    router.route('/login/show')
    .get(siteController.login_get);   
module.exports = router;