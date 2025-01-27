const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/review.controller');

// Middleware para proteger rutas
const { protect, restrictTo, restrictToSelf } = require('../middlewares/auth.middleware');

// Ruta para crear una nueva reseña (accesible solo para usuarios autenticados)
router.post('/:bookId', protect, reviewController.createReview);

// Ruta para obtener todas las reseñas de un usuario específico (accesible solo para el usuario correspondiente o administradores)
router.get('/user/:userId', protect, restrictToSelf, restrictTo('admin', 'user'), reviewController.getReviewsByUser);

// Ruta para obtener una reseña específica (accesible para todos los usuarios)
router.get('/:id', reviewController.getReview);

// Ruta para obtener todas las reseñas (accesible solo para administradores)
router.get('/', reviewController.getAllReviews);

// Ruta para eliminar una reseña (accesible solo para el usuario correspondiente o administradores)
router.delete('/:id', protect, restrictTo('admin', 'user'), reviewController.deleteReview);

// Ruta para obtener todas las reseñas de un libro específico (accesible para todos los usuarios)
router.get('/book/:bookId', reviewController.getBookReviews);

module.exports = router;

