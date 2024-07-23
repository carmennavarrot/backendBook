const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type:String,
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
    }],
    user:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]

});


const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
