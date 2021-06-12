const express = require('express');
const router = express.Router();
const resourcesController = require('../controllers/resourcesController');

router.route('/')
    .post(resourcesController.resources_post)

router.route('/show')
    .get(resourcesController.resources_get)

router.route('/new')
    .get(resourcesController.resources_create_get)

router.route('/:id')
    .delete(resourcesController.resources_delete)


router.route('/:id/edit')
    .get(resourcesController.resources_update_get)
    .put(resourcesController.resources_update_put)
    

module.exports = router;