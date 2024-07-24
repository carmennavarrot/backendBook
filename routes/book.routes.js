const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');

// Middleware para proteger rutas
const { protect, restrictTo, restrictToSelf } = require('../middlewares/auth.middleware');

// Ruta para crear un nuevo libro (accesible solo para usuarios autenticados)
router.post('/', protect, bookController.createBook);

// Ruta para obtener todos los libros de un usuario específico (accesible solo para el usuario correspondiente o administradores)
router.get('/user/:usuarioId', protect, restrictToSelf, restrictTo('admin', 'user'), bookController.getBookbyId);

// Ruta para obtener un libro específico (accesible para todos los usuarios)
router.get('/:id', bookController.getBook);

// Ruta para obtener todos los libros (accesible para todos los usuarios)
router.get('/', bookController.getAllBook);

// Ruta para editar un libro (accesible solo para administradores)
router.put('/:id', protect, restrictTo('admin'), bookController.editBook);

module.exports = router;
