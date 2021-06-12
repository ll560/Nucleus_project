// const { v4:uuid } = require('uuid');
// const data = require('../data');
const Resource = require('../model/resourceModel'); 

module.exports = {
    resources_get: (request, response) => {
        // response.render('pages/resources', {data:data});
        console.log("hello")
        Resource.find({}, (error, resources) => {
           if (error) {
              return error;
           }else {
              response.render('pages/resources', { data: resources });
           }
           })
        },
    resources_create_get: (resquest, response) => {
        console.log("hello")
        Resource.find({}, (error, resources) => {
           if (error) {
              return error;
           }else {
              response.render('pages/createNewResource', { data: resources });
           }
           })
        },
    
    resources_update_get: (request, response) => {
        const { id } = request.params;
        console.log('This is the update get')
        Resource.findOne({_id: id}, (error, foundResource) =>{
            if (error) {
                return error;
            } else { 
                response.render('pages/updateResourceForm', {resource: foundResource})
            }
        })
        
    },
    resources_post:(request, response)  => {
        // Create new survey object
     console.log(request.body);
     const organization = request.body.organization;
      
        const newResource = new Resource({
        organization: request.body.organization,
        program: request.body.program, 
        location: request.body.location,
        activity: request.body.activity,
        highlight: request.body.highlight,
        details: request.body.details,  
     });
     newResource.save();
     response.redirect('/resources/show');
   
},
    resources_update_put: (request, response) => {
        const { id } = request.params;
        Resource.findByIdAndUpdate({_id: id}, {$set:{
            organization: request.body.organization,
            program: request.body.program,
            location: request.body.location,
            activity: request.body.activity,
            highlight: request.body.highlight,
            details: reques.body.details
        }}, {new: true}, error =>{
            if (error){
                return error;
            } else {
                response.redirect('/resource/show')
            } 
      
        
    })
},
resources_delete: (request, response) => {
    const {id} = request.params;
    Resource.deleteOne({_id: id}, error => {
        if (error){
            return error;
        }else{
            response.redirect('/admin/show')
        }
        
    })
}
    
}
