require('dotenv').config;
const path = require('path');
const controllers = require('./controllers/index.js');

const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/reviews', controllers.getReviews)

app.get('/reviews/meta/', controllers.getMeta);

app.post('/reviews', controllers.postReview)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
})