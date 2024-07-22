const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Middleware para proteger rutas
const { protect, restrictTo } = require('../middlewares/auth.middleware');

// Ruta para registrar un nuevo usuario
router.post('/register', userController.register);

// Ruta para el inicio de sesión
router.post('/login', userController.login);

// Ruta para actualizar el perfil de usuario
// Asegúrate de que solo usuarios logueados puedan acceder a esta ruta
router.patch('/update/:userId', protect, userController.updateProfile);

// Ruta para obtener todos los usuarios (solo accesible para administradores)
router.get('/', protect, restrictTo('admin'), userController.getAllUsers);

module.exports = router;
