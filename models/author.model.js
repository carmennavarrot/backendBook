const mongoose = require('mongoose');
const Book = require('./book.model');

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true 
    },
    Books: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        require:true
    },
    dateOfBirth: {
        type: Date

    }

});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;