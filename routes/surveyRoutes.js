const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/surveyController');

//survey
router.route('/')
    .post(surveyController.survey_post);

router.route('/show')
    .get(surveyController.survey_get);
 
router.route('/show.json')  
    .get(surveyController.survey_json_get)


module.exports = router;

