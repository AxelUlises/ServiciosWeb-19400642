const Movie = require('../models/movie.model');

exports.getMovies = async (req, res) => {
    try{
        const movies = await Movie.find();
        return res.status(200).json(
            {
                message: "Consulta de películas",
                data: movies

            }
        );
    }catch(error){
        return res.status(500).json(
            {
                message: "Error al consultar películas",
                data:error
            }
        )
    }
}

exports.getMoviesById = async (req, res) => {
    const movieId = req.params.movieId;
    try{
        const movie = await Movie.findById(movieId);
        return res.status(200).json(
            {
                message: "Consultando Película por ID: " + movieId,
                data: movie
            }
        );
    }catch(error){
        return res.status(500).json(
            {
                message: "Error al consultar pelicula",
                data:error
            }
        )
    }
}

exports.newMovie = async (req, res) => {
    try{
        const {nombre,director,año,duración,genero} = req.body
        const newMovie = new Movie({nombre, director, año, duración, genero});
        await newMovie.save();
        return res.status(200).json(
            {
                message: "Película creado con exito",
                data: newMovie
            }
        );
    }catch(error){
        return res.status(500).json(
            {
                message: "Error al crear película",
                data:error
            }
        )
    }
}

exports.updateMovie = async (req, res) => {
    const movieId = req.params.movieId;
    const newData = req.body;
    try{
        const updateMovie = await Movie.findByIdAndUpdate(movieId, newData, {new: true});
        return res.status(200).json(
            {
                message: "Actualizando película encontrada por ID: " + movieId,
                data: updateMovie
            }
        );
    }catch(error){
        return res.status(500).json(
            {
                message: "Error al actualizar película",
                data:error
            }
        )
    }
}

exports.deleteMovie = async(req, res) => {
    const movieId = req.params.movieId;
    try{
        await Movie.findByIdAndDelete(movieId);
        return res.status(200).json(
            {
                message: "Película eliminada con exito" + movieId 
            }
        );
    }catch(error){
        return res.status(500).json(
            {
                message: "Error al eliminar película",
                data: error
            }
        )
    }
}