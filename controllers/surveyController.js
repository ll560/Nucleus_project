module.exports = {
   survey_get: (request, response) => {
        response.render('pages/survey');
   },
   survey_post: (request, response) => {
      // Create new survey object
      const newSurvey = new Survey({
         title: request.body.title,
         months: request.body.months
      })
      // Use mongoose save() method to save into survey collection
      // then redirect to the landing page
    response.redirect('/');
   }
}