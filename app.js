const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Survey = require('./model/survey');
const cors = require('cors');

const app = express();
// You can change the port number if needed

// Connect to your MongoDB databas

const DB =
  "mongodb://127.0.0.1:27017/survey-app";

mongoose.connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connection Succesfull");
  })
  .catch((error) => console.log("no Connetion", error));
const port = 3000; 

app.use(cors());
// Serve static files from the 'public' directory
app.use(express.static('public'));

// Parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Set up a route to handle form submissions
app.post('/process-survey', (req, res) => {
  const formData = req.body;
  const survey = new Survey({
    name: formData.Name,
    email: formData.Email,
    age: formData.Age,
    gender: formData.Gender,
    prediction: formData.Prediction,
    hobbies: formData.Hobbies,
  });
  survey.save();
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
