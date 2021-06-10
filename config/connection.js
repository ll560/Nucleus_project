const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nucleus',
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if(!err){
            console.log('Successful connection with MongoDB!!!!!');
        }
        else {
            console.log('Error with MongoDB connection');
        }
    });