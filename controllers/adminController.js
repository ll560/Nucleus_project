const { v4:uuid } = require('uuid');
const data = require('../data');

module.exports = {
    admin_create_get: (request, response) => {
        response.render('pages/admin', {data: data});
    },
    admin_create_post: (request, response) => {
       const title = request.body.title;
        if (title != "") {
            const newResource = new Resource({
                organization: request.body.organization,
                program: request.body.program,
                location: request.body.location,
                activity: request.body.activity,
                yes: request.body.boolean,
                highlight: request.body.highlight,
                image: request.body.favorite_section,
                link: reques.body.link
            });
            newResource.save();
        response.redirect('index');
    } else {
        response.redirect('pages/addResourcePage')
    }
    },
    admin_update_get: (request, response) => {
        const { id } = request.params;
        Resource.findOne({_id: id}, (error, foundResource) =>{
            if (error) {
                return error;
            } else { 
                response.render('pages/updateResourceForm', {resource: foundResource})
            }
        })
        response.send('display update form entry');
    },
    admin_update_put: (request, response) => {
        const id = request.params;
        Resource.findByIdAndUpdate({_id: id}, {$set:{
            organization: request.body.organization,
            program: request.body.program,
            location: request.body.location,
            activity: request.body.activity,
            yes: request.body.boolean,
            highlight: request.body.highlight,
            image: request.body.favorite_section,
            link: reques.body.link
        }}, {new:true}, (error) =>{
            if (error){
                return error;
            } else {
                response.redirect('/resource/show')
            } 
      
        
    })
},
    admin_delete: (request, response) => {
        const id = request.params;
        Resource.deleteOne({_id: id}, (error) => {
            if (error) {
                return error;
            }else{
                response.render('/resource/show');
            
            }
        })
        
    }
}