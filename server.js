'use strict';
require('dotenv').config();
const express = require('express');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');

const app = express();

// For FCC testing purposes
fccTesting(app);

// Set Pug as the view engine
app.set('view engine', 'pug');
// Set the views directory
app.set('views', './views/pug');

// Middleware
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home route
app.route('/').get((req, res) => {
  // Render the index.pug template
  res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
