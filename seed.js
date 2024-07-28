const mongoose = require('mongoose');
const User = require('./models/user.model');
const Book = require('./models/book.model');
const Review = require('./models/review.model');
const Author = require('./models/author.model')
const dotenv = require('dotenv');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected for seeding'))
  .catch(err => console.error('MongoDB connection error:', err));

const users = [
    { _id: new mongoose.Types.ObjectId(), name: "Alice Johnson", username: "alice_johnson", email: "alice@example.com", password: "password123", role: "user" },
    { _id: new mongoose.Types.ObjectId(), name: "Bob Smith", username: "bob_smith", email: "bob@example.com", password: "password123", role: "admin" },
    { _id: new mongoose.Types.ObjectId(), name: "Charlie Brown", username: "charlie_brown", email: "charlie@example.com", password: "password123", role: "user" },
    { _id: new mongoose.Types.ObjectId(), name: "Dana Scully", username: "dana_scully", email: "dana@example.com", password: "password123", role: "admin" }
];

const authors = [
    // { _id: new mongoose.Types.ObjectId(), name: "George Orwell", books: ["1984", "Rebelión en la granja"], dateOfBirth: new Date("1903-06-25") },
    // { _id: new mongoose.Types.ObjectId(), name: "J.K. Rowling", books: ["Harry Potter y la piedra filosofal", "Harry Potter y la cámara secreta", "Harry Potter y el prisionero de Azkaban"], dateOfBirth: new Date("1965-07-31") },
    // { _id: new mongoose.Types.ObjectId(), name: "Harper Lee", books: ["Matar a un ruiseñor"], dateOfBirth: new Date("1926-04-28") },
    // { _id: new mongoose.Types.ObjectId(), name: "J.D. Salinger", books: ["El guardián entre el centeno"], dateOfBirth: new Date("1919-01-01") },
    // { _id: new mongoose.Types.ObjectId(), name: "Jane Austen", books: ["Orgullo y prejuicio", "Sentido y sensibilidad", "Emma"], dateOfBirth: new Date("1775-12-16") },
    // { _id: new mongoose.Types.ObjectId(), name: "F. Scott Fitzgerald", books: ["El gran Gatsby"], dateOfBirth: new Date("1896-09-24") },
    // { _id: new mongoose.Types.ObjectId(), name: "Herman Melville", books: ["Moby-Dick"], dateOfBirth: new Date("1819-08-01") },
    // { _id: new mongoose.Types.ObjectId(), name: "Leo Tolstoy", books: ["Guerra y paz", "Anna Karénina"], dateOfBirth: new Date("1828-09-09") }
];


const books = [
    { 
        _id: new mongoose.Types.ObjectId(), 
        title: "1984", 
        author:  "George Orwell", 
        image: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg", 
        synopsis: "Una novela distópica sobre un régimen totalitario que utiliza la vigilancia, la censura y la represión para mantener su poder.", 
        rating: 4.5, 
        publicationDate: "1949", 
        genre: "Distopía", 
        reviews: [] ,
        user: users[0]._id

    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        title: "Harry Potter y la piedra filosofal", 
        author:  "J.K. Rowling", 
        image: "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg", 
        synopsis: "La primera novela de la serie Harry Potter, que sigue las aventuras del joven mago Harry Potter en su primer año en Hogwarts.", 
        rating: 5, 
        publicationDate: "1997", 
        genre: "Fantasía", 
        reviews: [] ,
        user: users[0]._id
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        title: "Matar a un ruiseñor", 
        author: "Harper Lee", 
        image: "https://m.media-amazon.com/images/I/51fYOnj6NnL._SY445_SX342_.jpg", 
        synopsis: "Una novela sobre la injusticia racial en el sur de los Estados Unidos, vista a través de los ojos de una niña.", 
        rating: 4.7, 
        publicationDate: "1960", 
        genre: "Ficción", 
        reviews: [] ,
        user: users[0]._id
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        title: "Rebelión en la granja", 
        author: "George Orwell", 
        image: "https://images-na.ssl-images-amazon.com/images/I/81vpsIs58WL.jpg", 
        synopsis: "Una sátira política sobre una granja donde los animales se rebelan contra sus dueños humanos, solo para ser traicionados por sus propios líderes.", 
        rating: 4.3, 
        publicationDate: "1945", 
        genre: "Sátira política", 
        reviews: [] ,
        user: users[0]._id
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        title: "El guardián entre el centeno", 
        author: "J.D. Salinger", 
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg", 
        synopsis: "La historia de un adolescente rebelde que se escapa de su internado y recorre Nueva York mientras reflexiona sobre la vida y la sociedad.", 
        rating: 4.1, 
        publicationDate: "1951", 
        genre: "Ficción", 
        reviews: [] ,
        user: users[0]._id
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        title: "Orgullo y prejuicio", 
        author: "Jane Austen", 
        image: "https://m.media-amazon.com/images/I/519+aaVc4rL._SY445_SX342_.jpg", 
        synopsis: "Una novela romántica que sigue la vida de Elizabeth Bennet mientras lidia con cuestiones de moralidad, educación y matrimonio en la sociedad británica de principios del siglo XIX.", 
        rating: 4.8, 
        publicationDate: "1813", 
        genre: "Romance", 
        reviews: [],
        user: users[0]._id 
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        title: "El gran Gatsby", 
        author: "F. Scott Fitzgerald", 
        image: "https://m.media-amazon.com/images/I/61KOdBZ6IWL._SY445_SX342_.jpg", 
        synopsis: "Una historia trágica sobre el sueño americano, centrada en el misterioso millonario Jay Gatsby y su amor por Daisy Buchanan.", 
        rating: 4.4, 
        publicationDate:"1925", 
        genre: "Tragedia", 
        reviews: [] ,
        user: users[0]._id
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        title: "Moby-Dick", 
        author:  "Herman Melville", 
        image: "https://m.media-amazon.com/images/I/51EPkbs4CNL._SY445_SX342_.jpg", 
        synopsis: "La epopeya de la caza del gran cachalote blanco, Moby Dick, liderada por el capitán Ahab, obsesionado con la venganza.", 
        rating: 4.2, 
        publicationDate:"1851", 
        genre: "Aventura", 
        reviews: [] ,
        user: users[0]._id
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        title: "Guerra y paz", 
        author: "Leo Tolstoy", 
        image: "https://m.media-amazon.com/images/I/91VQkzNt-gL._SY466_.jpg", 
        synopsis: "Una extensa novela histórica que narra la historia de varias familias aristocráticas rusas durante las guerras napoleónicas.", 
        rating: 4.9, 
        publicationDate:"1869", 
        genre: "Ficción histórica", 
        reviews: [] ,
        user: users[0]._id
    }
];

  

const reviews = [
    { 
        _id: new mongoose.Types.ObjectId(), 
        user: users[0]._id, 
        book: books[0]._id, 
        review: "Una novela distópica escalofriante que presenta una visión aterradora de un futuro totalitario. Me mantuvo al borde de mi asiento de principio a fin.", 
        rating: 5, 
        date: new Date("2023-07-20") 
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        user: users[1]._id, 
        book: books[0]._id, 
        review: "La representación de Orwell de un mundo donde el Gran Hermano siempre está observando es tanto inquietante como provocativa. Un libro imprescindible.", 
        rating: 4, 
        date: new Date("2023-07-21") 
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        user: users[2]._id, 
        book: books[1]._id, 
        review: "Una introducción mágica al mundo de Hogwarts. La historia es cautivadora y los personajes son entrañables. No pude dejar de leerlo.", 
        rating: 5, 
        date: new Date("2023-07-22") 
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        user: users[3]._id, 
        book: books[1]._id, 
        review: "Un inicio asombroso para una de las series de fantasía más queridas de todos los tiempos. La narrativa es emocionante y la magia se siente real.", 
        rating: 5, 
        date: new Date("2023-07-23") 
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        user: users[0]._id, 
        book: books[2]._id, 
        review: "Una novela profunda sobre la injusticia racial y la pérdida de la inocencia. Un libro que te hace reflexionar sobre la sociedad.", 
        rating: 5, 
        date: new Date("2023-07-24") 
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        user: users[1]._id, 
        book: books[2]._id, 
        review: "El clásico atemporal de Harper Lee dice mucho sobre la naturaleza humana y la moralidad. Un libro conmovedor y poderoso.", 
        rating: 4, 
        date: new Date("2023-07-25") 
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        user: users[2]._id, 
        book: books[3]._id, 
        review: "Una obra satírica brillante que critica los regímenes totalitarios y la injusticia social. Cada página es una joya.", 
        rating: 5, 
        date: new Date("2023-07-26") 
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        user: users[3]._id, 
        book: books[3]._id, 
        review: "La alegoría de Orwell es una poderosa crítica del poder y la corrupción. Una lectura obligada para entender los peligros del autoritarismo.", 
        rating: 4, 
        date: new Date("2023-07-27") 
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        user: users[0]._id, 
        book: books[4]._id, 
        review: "Un fascinante viaje a la mente de un adolescente problemático. La escritura de Salinger es cruda y realista.", 
        rating: 4, 
        date: new Date("2023-07-28") 
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        user: users[1]._id, 
        book: books[4]._id, 
        review: "La novela de Salinger captura la angustia y la alienación de la juventud como ninguna otra. Un clásico que resuena aún hoy.", 
        rating: 4, 
        date: new Date("2023-07-29") 
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        user: users[2]._id, 
        book: books[5]._id, 
        review: "Una novela romántica encantadora e ingeniosa que nunca envejece. Jane Austen tiene un don para capturar las emociones humanas.", 
        rating: 5, 
        date: new Date("2023-07-30") 
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        user: users[3]._id, 
        book: books[5]._id, 
        review: "La obra maestra de Austen es una exploración atemporal del amor y la posición social. Un libro que siempre disfruto releer.", 
        rating: 5, 
        date: new Date("2023-07-31") 
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        user: users[0]._id, 
        book: books[6]._id, 
        review: "Una exploración inquietante del sueño americano. Fitzgerald describe la opulencia y la desesperación con una prosa lírica.", 
        rating: 5, 
        date: new Date("2023-08-01") 
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        user: users[1]._id, 
        book: books[6]._id, 
        review: "La representación de Fitzgerald de la Era del Jazz es tanto glamorosa como trágica. Un libro que se siente tan relevante hoy como cuando fue escrito.", 
        rating: 5, 
        date: new Date("2023-08-02") 
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        user: users[2]._id, 
        book: books[7]._id, 
        review: "Una historia apasionante de obsesión y los peligros de la venganza. Melville crea un mundo tan vasto y complejo como el propio océano.", 
        rating: 4, 
        date: new Date("2023-08-03") 
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        user: users[3]._id, 
        book: books[7]._id, 
        review: "El épico de Melville es una narrativa compleja y ricamente elaborada que recompensa la lectura cuidadosa. Cada personaje está maravillosamente desarrollado.", 
        rating: 4, 
        date: new Date("2023-08-04") 
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        user: users[0]._id, 
        book: books[8]._id, 
        review: "Una obra monumental de ficción histórica que explora las complejidades de la guerra y la paz. La profundidad de los personajes es impresionante.", 
        rating: 5, 
        date: new Date("2023-08-05") 
    },
    { 
        _id: new mongoose.Types.ObjectId(), 
        user: users[1]._id, 
        book: books[8]._id, 
        review: "La obra magna de Tolstoy es una profunda meditación sobre la historia, el poder y la naturaleza humana. Una lectura que te deja reflexionando durante días.", 
        rating: 5, 
        date: new Date("2023-08-06") 
    }
];

const seedDB = async () => {
    await User.deleteMany({});
    await Review.deleteMany({});
    await Book.deleteMany({});
    await Author.deleteMany({})
  
    for (const user of users) {
        const newUser = new User(user);
        await newUser.save();
    }

    for (const review of reviews) {
        const newReview = new Review(review);
        await newReview.save();
    }

    for (const book of books) {
        const newBook = new Book(book);
        await newBook.save();
    }

    
    for (const author of authors) {
        const newAuthor = new Author(author);
        await newAuthor.save();
    }
};

seedDB().then(() => {
    console.log(`Seeds creadas correctamente!`)
    mongoose.connection.close();
});
