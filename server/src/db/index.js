const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/rr', {useNewUrlParser: true});
}


const reviewsSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  product_id: Number,
  rating: Number,
  date: Date,
  summary: String,
  body: String,
  recommended: Boolean,
  reported: Boolean,
  reviewer_name: String,
  reviewer_email: String,
  response: String,
  helpfulness: Number
})

const characteristicsSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  product_id: Number,
  name: String
})

const reviews_photosSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  review_id: Number,
  url: String
})

const characteristic_reviewsSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  characteristic_id: Number,
  review_id: Number,
  value: Number
})

const Characteristic = mongoose.model('Characteristic', characteristicsSchema);
const Review = mongoose.model('Review', reviewsSchema);
const Reviews_photo = mongoose.model('Reviews_photo', reviews_photosSchema);
const Characteristic_review = mongoose.model('Characteristic_review', characteristic_reviewsSchema);

const getReviews = (prod_id, count = 5, sorting) => {
  console.log(sorting);
  return Review.aggregate([{$match: {product_id: prod_id}}]).sort({ [sorting]: -1 }).limit(count)
    .lookup({from: 'reviews_photos', localField: 'id', foreignField: 'review_id', as: 'photos'})
}


// const reviewsSchema = new mongoose.Schema({
//   id: {type: Number, unique: true},
//   product_id: Number,
//   rating: Number,
//   summary: String,
//   recommended: Boolean,
//   reported: Boolean,
//   response: String,
//   body: String,
//   date: Date,
//   reviewer_name: String,
//   helpfulness: Number,
//   photos: [String]
// })

// const ratingsSchema = new mongoose.Schema({
//   product_id: Number,
//   1: Number,
//   2: Number,
//   3: Number,
//   4: Number,
//   5: Number,
//   size: Number,
//   width: Number,
//   quality: Number,
//   comfort: Number
// })

// const Review = mongoose.model('Review', reviewsSchema);
// const Rating = mongoose.model('Rating', ratingsSchema);

module.exports.Review = Review;
module.exports.Characteristic = Characteristic;
module.exports.Reviews_photo = Reviews_photo;
module.exports.Characteristic_review = Characteristic_review;
module.exports.getReviews = getReviews;
