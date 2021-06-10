const mongoose = require('mongoose');

const {Schema} = mongoose;
const surveySchema = new Schema({
    title:  String,
    months: Number,
    company: String,
    use_aamc_material: Boolean,
    use_flashcards: Boolean,
    cars: String,
    favorite_section: String
});

const Survey = mongoose.model('Survey', surveySchema);


module.exports = Survey;