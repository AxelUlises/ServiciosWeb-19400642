const mongoose = require('mongoose');

mongoose.connect
(
    `mongodb+srv://root:loOsj5ffmEbMLjI3@cluster0.lnmiw3u.mongodb.net/movies-db?retryWrites=true&w=majority`
)
.then(()=> console.log('Conexión exitosa a MongoDB'))
.catch(err => console.error('Errror al conectar a MongoDB:', err));

module.exports = mongoose;