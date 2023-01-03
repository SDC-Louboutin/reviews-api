const models = require('../models');

const getReviews = (req, res) => {
  const queries = req.query;
  const product_id = parseInt(queries.product_id);
  const count = parseInt(queries.count) || 5;
  let sort;

  //set sort variable to pass into getReviews
  if (queries.sort === 'newest') {
    sort = 'date';
  } else if (queries.sort === 'helpfulness') {
    sort = 'helpfulness';
  } else {
    sort = undefined;
  }

  if (!queries.product_id || (queries.count && !Number.isInteger(count))) {
    res.status(400).send('Incorrect request');
  } else {
    models.getReviews(product_id, count, sort)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(400).send(err);
    })
  }
}

const postReview = (req, res) => {
  res.status(201).send('Test post');
}

const getMeta = (req, res) => {
  res.status(201).send('Hello')
}




module.exports.getReviews = getReviews;
module.exports.postReview = postReview;
module.exports.getMeta = getMeta;