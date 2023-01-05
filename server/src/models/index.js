const db = require('../db');

const getReviews = (prod_id, count = 5, sorting) => {
  return db.Review
    .aggregate([{$match: {product_id: prod_id, reported: "false"}}])
    .sort({ [sorting]: -1 }).limit(count)
    .lookup({from: 'reviews_photos', localField: 'id', foreignField: 'review_id', as: 'photos'})
}

const postReview = (review) => {
  return db.Review
    .count()
    .then(count => {
      review.id = count + 1;
      review.date = new Date().getTime();
      review.reported = "false";
      review.helpfulness = 0;
      console.log(review);
      db.Review.create(review);
    })
}

module.exports.getReviews = getReviews;
module.exports.postReview = postReview;