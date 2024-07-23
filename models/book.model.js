const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    },
    image:{
        type: String,
        required: true

    }, 
    synopsis: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1, max: 5,
        required: true
    }
    ,
    publicationDate: {
        type: Date,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }]
});


const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
