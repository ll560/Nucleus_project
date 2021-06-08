const express = require('express');
const router = express.Router();
const studyController = require('../controllers/studyController');

router.route('/show')
    .get(studyController.study_get);

module.exports = router;