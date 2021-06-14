const express = require('express');
const router = express.Router();
const resourcesController = require('../controllers/resourcesController');
var multer = require('multer');

// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'images')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });

// var upload = multer({ storage: storage });

router.route('/')
    .post(resourcesController.resources_post);


router.route('/show')
    .get(resourcesController.resources_get)

router.route('/new')
    .get(resourcesController.resources_create_get)

router.route('/:id')
    .delete(resourcesController.resources_delete)
    .put(resourcesController.resources_update_put)

router.route('/:id/edit')
    .get(resourcesController.resources_update_get)
    
    

module.exports = router;