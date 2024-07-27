const Book = require('../models/book.model');
const Review = require('../models/review.model');
const User = require('../models/user.model');

const bookController = {
    // Crear un nuevo libro
    createBook: async (req, res) => {
        try {
            const { title, author, image,synopsis, rating, publicationDate, genre } = req.body;

            const nuevoLibro = new Book({
                title,
                author,
                image,
                synopsis,
                rating,
                publicationDate,
                genre,
                user: req.user._id,
                
            });

            await nuevoLibro.save();

           return res.status(201).json({ message: 'Libro creado exitosamente', libro: nuevoLibro });
        } catch (error) {
           return res.status(500).json({ message: 'Error al crear el libro', error: error.message });
        }
    },

    // Obtener libros por usuario
    getBookbyId: async (req, res) => {
        try {
            const { _id } = req.params;
            const libros = await Book.find({ user: _id }).populate('user');

           return res.status(200).json(libros);
        } catch (error) {
           return res.status(500).json({ message: 'Error al obtener los libros', error: error.message });
        }
    },

    // Obtener un libro específico
    getBook: async (req, res) => {
        try {
            const { id } = req.params;
            const libro = await Book.findById(id).populate('author');

            if (!libro) {
                return res.status(404).json({ message: 'Libro no encontrado' });
            }

           return res.status(200).json(libro);
        } catch (error) {
           return res.status(500).json({ message: 'Error al obtener el libro', error: error.message });
        }
    },

    // Obtener todos los libros
    getAllBook: async (req, res) => {
        try {
            const libros = await Book.find().populate('author reviews');
           return res.status(200).json(libros);
        } catch (error) {
           return res.status(500).json({ message: 'Error al obtener los libros', error: error.message });
        }
    },

    // Editar un libro
    editBook: async (req, res) => {
        try {
            const { id } = req.params;
            const { title, author, image,synopsis, publicationDate, genre } = req.body;

            const libroActualizado = await Book.findByIdAndUpdate(
                id,
                { title, author, image,synopsis, publicationDate, genre },
                { new: true }
            );

            if (!libroActualizado) {
                return res.status(404).json({ message: 'Libro no encontrado' });
            }

           return res.status(200).json({ message: 'Libro actualizado exitosamente', libro: libroActualizado });
        } catch (error) {
          return  res.status(500).json({ message: 'Error al actualizar el libro', error: error.message });
        }
    },
    // eliminar
    deleteBook: async (req, res) => {
        try {
            const { id } = req.params;
            const deleteBook = await Book.findByIdAndDelete(id);
            if (!deleteBook) {
                return res.status(404).json({ message: 'Libro no encontrado' });
            }
await Review.deleteMany({book: id})
           return res.status(200).json({ message: 'Book cancelled successfully' });
        } catch (error) {
          return  res.status(500).json({ message: 'Error al borrar', error: error.message });
        }
    },



};

module.exports = bookController;
