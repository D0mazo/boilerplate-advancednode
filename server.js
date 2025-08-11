'use strict';
require('dotenv').config();
const express = require('express');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');

const app = express();

// ✅ Tell Express to use Pug
app.set('view engine', 'pug');

// ✅ Tell Express where to find the views
app.set('views', './views/pug');

fccTesting(app); // For FCC testing purposes

app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Render the index template with variables
app.route('/').get((req, res) => {
  res.render('index', {
    title: 'Home Page',
    message: 'Pug template successfully rendered!',
    showLogin: true,
    showRegistration: true,
    showSocialAuth: true
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
