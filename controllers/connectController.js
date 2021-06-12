const { all } = require("./siteController");
const Profile = require('../model/connectModel'); 


module.exports = {
   connect_get: (request, response) => {
      console.log("hello")
      Profile.find({}, (error, allProfiles) => {
         if (error) {
            return error;
         }else {
            response.render('pages/connect', { data: allProfiles });
         }
         })
      },
   connect_post: (request, response) => {
      // Create new survey object
      console.log(request.body);
      const name = request.body.name;
     
         const newProfile = new Profile({
         name: request.body.name,
         email: request.body.email, 
         number: request.body.number
         
      });
      newProfile.save();
      response.redirect('/');
   
   }
   }