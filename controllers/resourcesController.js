// const { v4:uuid } = require('uuid');
const { request, response } = require('express');
const data = require('../data'); 
const Resource = require('../model/resourceModel'); 


module.exports = {
    resources_get: (request, response) => {
        // response.render('pages/resources', {data:data});
        console.log("This is the resource page")
        Resource.find({}, (error, resources) => {
           if (error) {
              return error;
           }else {
              response.render('pages/resources', { data: resources });
           }
           })
        },

        
    resources_create_get: (request, response) => {
        console.log("create new resource")
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
        console.log('This is the update resource')
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
        image: request.body.image,
        organization: request.body.organization,
        program: request.body.program, 
        location: request.body.location,
        activity: request.body.activity,
        highlight: request.body.highlight,
        details: request.body.details,  
     });
     newResource.save();
     response.redirect('/admin/show');
   
},
    resources_update_put: (request, response) => {
        const { id } = request.params;
        Resource.findByIdAndUpdate({_id: id}, {$set:{
            image: request.body.image,
            organization: request.body.organization,
            program: request.body.program,
            location: request.body.location,
            activity: request.body.activity,
            highlight: request.body.highlight,
            details: request.body.details
        }}, {new: true}, error =>{
            if (error){
                return error;
            } else {
                response.redirect('/resources/show')
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
