module.exports = {
    admin_create_get: (request, response) => {
        response.render('pages/admin');
    },
    admin_create_post: (request, response) => {
        const title = request.body.title;
        if (title != "") {
        response.redirect('index');
    } else {
        response.redirect('pages/addResourcePage')
    }
    },
    admin_update_get: (request, response) => {
        const entryId = request.params.id;
        response.send('display update form entry');
    },
    admin_update: (request, response) => {
        const entryId = request.params.id;
        response.send('display update form entry');
    },
    admin_delete: (request, response) => {
        const entryId = request.params.id;
        response.render('resources');
    }
}