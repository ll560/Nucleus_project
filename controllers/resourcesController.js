const { v4:uuid } = require('uuid');
const data = require('../data');

module.exports = {
    resources_get: (request, response) => {
        response.render('pages/resources', {data:data});
    }
}

//survey and resources same