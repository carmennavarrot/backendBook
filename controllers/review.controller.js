const Book = require('../models/book.model');
const Review = require('../models/review.model');
const User = require('../models/user.model');

const reviewController = {
      // Crear una nueva reseña
    createReview: async (req, res) => {
        try {
            const { book, text, rating } = req.body;

            const newReview = new Review({
                user: req.user._id,
                book,
                text,
                rating
            });

            await newReview.save();

            // Actualizar el libro con la nueva reseña
            await Book.findByIdAndUpdate(book, { $push: { reviews: newReview._id } });

            res.status(201).json({ message: 'Review created successfully', review: newReview });
        } catch (error) {
            res.status(500).json({ message: 'Error creating review', error: error.message });
        }
    },

  // Obtener reseñas por usuario
    getReviewsByUser: async (req, res) => {
        try {
            const { userId } = req.params;
            const reviews = await Review.find({ user: userId }).populate('book');

            res.status(200).json(reviews);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving reviews', error: error.message });
        }
    },

    // Obtener una reseña específica
    getReview: async (req, res) => {
        try {
            const { id } = req.params;
            const review = await Review.findById(id).populate('book');

            if (!review) {
                return res.status(404).json({ message: 'Review not found' });
            }

            res.status(200).json(review);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving review', error: error.message });
        }
    },

    // Eliminar una reseña
    deleteReview: async (req, res) => {
        try {
            const { id } = req.params;

            const review = await Review.findById(id);
            if (!review) {
                return res.status(404).json({ message: 'Review not found' });
            }

             // Eliminar la reseña del libro
            await Book.findByIdAndUpdate(review.book, { $pull: { reviews: id } });

            await Review.findByIdAndDelete(id);

            res.status(200).json({ message: 'Review deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting review', error: error.message });
        }
    },

    //// Obtener todas las reseñas
    getAllReviews: async (req, res) => {
        try {
            const reviews = await Review.find().populate('user book');
            res.status(200).json(reviews);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving all reviews', error: error.message });
        }
    }
  
};

module.exports = reviewController;