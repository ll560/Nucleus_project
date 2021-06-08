module.exports = {
    all: (request, response) => {
        response.render('pages/admissions');
    },
    admissions_post: (request, response) => {
        response.redirect('pages/index');
}
}