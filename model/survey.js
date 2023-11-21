const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
  name: String,
  email: String ,
  age: Number,
  gender: String,
  prediction : String,
  hobbies: String,
  // Add other fields as needed
});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;
