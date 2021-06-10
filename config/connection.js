//require('dotenv').config;
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL,
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if(err){
            console.log('Error with MongoDB connection');
        }
        else {
            console.log('Successful connection with MongoDB!!!!!');
        }
    });