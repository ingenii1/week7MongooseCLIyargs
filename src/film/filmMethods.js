const mongoose = require('mongoose');
const FilmModel = require('./filmModel')

//CREATE OPERATION, add movie//
exports.addMovie = async(newFilm) =>{
    try {
        let movie = new FilmModel(newFilm)
        await movie.save()
        console.log('Movie created')
    } catch (error) {
        console.log(error)
    }
    
    mongoose.connection.close()
};
//READ OPERATION, list movie//
exports.listMovie = async() =>{
    try {
        console.log(
        await FilmModel.find({})
        )
    } catch (error) {
        console.log(error)
    }

    mongoose.connection.close()
};
//UPDATE OPERATION, update movie//
exports.updateMovie = async(userQuery, userUpdate) =>{
    try {
        await Movie.findOneAndUpdate({ title: userQuery }, { title: userUpdate });
      } catch (error) {
        console.log(error);
      }

    mongoose.connection.close()
};
//DELETE OPERATION, delete movie//
exports.deleteMovie = async(queryObj) =>{
    try {
        await Movie.deleteOne(queryObj);
      } catch (error) {
        console.log(error);
      }

    mongoose.connection.close()
};