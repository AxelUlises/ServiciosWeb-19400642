const express=require('express');
const router=express.Router();
const movieController=require('../controllers/movies.controller');

router.get("/",movieController.getMovies);

router.get("/:movieId",movieController.getMoviesId);

router.post("/",movieController.newMovie);

router.put("/:movieId",movieController.updateMovie);

router.delete("/:movieId",movieController.deleteMovie);

module.exports=router;