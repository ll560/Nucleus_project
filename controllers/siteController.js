const Survey = require('../model/surveyModel'); 

module.exports = {
    all: (request, response) => {
        // Parse Survey collections database using mongoose
        Survey.find({}, (error, allSurveys) => {
         if (error) {
             return error;
        }else {
            response.render("pages/index", {data: allSurveys}) ;
        }
        }) 
       
        },
    about_get: (request, response) => {
        response.render('pages/about');
    },
    login_get: (request, response) => {
        response.render('pages/login');
    },
    login_post: (request, response) => {
        response.redirect('pages/admin');
    }
}