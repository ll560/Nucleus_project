const { all } = require("./siteController");
const Survey = require('../model/surveyModel'); 


module.exports = {
   survey_get: (request, response) => {
      console.log("hello")
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
      console.log(request.body);
      
      
         const newSurvey = new Survey({
         title: request.body.title,
         months: request.body.months, 
         company: request.body.company,
         use_aamc_material: request.body.use_aamc_material,
         use_flashcards: request.body.use_flashcards,
         cars: request.body.cars,
         favorite_section: request.body.favorite_section
      });
      newSurvey.save();
      response.redirect('/#survey-data');
   
   }
   }
