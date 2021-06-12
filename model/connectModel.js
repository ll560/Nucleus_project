const mongoose = require('mongoose');

const {Schema} = mongoose;
const profileSchema = new Schema({
    name:  String,
    email: Number,
    number: Number,
    
});

const Profile = mongoose.model('Profile', profileSchema);


module.exports = Profile;