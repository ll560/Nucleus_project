const mongoose = require('mongoose');

const {Schema} = mongoose;
const profileSchema = new Schema({
    name:  String,
    email: String,
    number: String
    
});

const Profile = mongoose.model('Profile', profileSchema);


module.exports = Profile;