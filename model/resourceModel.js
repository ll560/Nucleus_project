const mongoose = require('mongoose');

const {Schema} = mongoose;
const resourceSchema = new Schema({
    image: String,
    organization: String,
    program: String,
    location: String,
    activity: String,
    highlight: String,
    details: String
});

const Resource = mongoose.model('Resource', resourceSchema);


module.exports = Resource;