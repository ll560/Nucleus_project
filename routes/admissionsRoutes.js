const express = require('express');
const router = express.Router();
const admissionsController = require('../controllers/admissionsController');

//admissions
router.route('/')
    .post(admissionsController.admissions_post)
router.route('/show')
    .get(admissionsController.all)


module.exports = router;

