const db = require('../db');

const getReviews = (prod_id, count = 5, sorting) => {
  return db.Review
    .aggregate([{$match: {product_id: prod_id}}])
    .sort({ [sorting]: -1 }).limit(count)
    .lookup({from: 'reviews_photos', localField: 'id', foreignField: 'review_id', as: 'photos'})
}


  // ([
  //   {
  //       from: "Reviews_photo",
  //       localField: "id",
  //       foreignField: "review_id",
  //       as: "photos"
  //   }
  // ])
  // .find({ product_id: prod_id }).sort({ [sorting]: -1 }).limit(count);

const postReview = () => {

}

module.exports.getReviews = getReviews;
module.exports.postReview = postReview;