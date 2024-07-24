const mongoose = require('mongoose');
const ReviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', required: true
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    review: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1, max: 5,
        required: true
    }
});

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;
