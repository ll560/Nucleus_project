const express = require('express');
const router = express.Router();
const resourcesController = require('../controllers/resourcesController');

router.route('/show')
    .get(resourcesController.resources_get)

module.exports = router;