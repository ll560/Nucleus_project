const { all } = require("./siteController");
const Survey = require('../model/surveyModel'); 


module.exports = {
   survey_get: (request, response) => {
      Survey.find({}, (error, allSurveys) => {
         if (error) {
            return error;
         }else {
            response.render('pages/survey', { data: allSurveys });
         }
         })
      },
   survey_post: (request, response) => {
      // Create new survey object
      const title = request.body.title;
      if (title !="") {
         const newSurvey = new Survey({
         title: request.body.title,
         months: request.body.months, 
         company: request.body.company,
         yes: request.body.boolean,
         yes: request.body.boolean,
         cars: request.body.cars,
         favorite_section: request.body.favorite_section
      });
      newSurvey.save();
      response.redirect('/');
   } else {
      response.render('pages/survey');
   }
   }
}