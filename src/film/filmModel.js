const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    
    actor:{
        type:String,
        required:true,
        default :'actor uknown',
        

    },
    
    year: {
    type: Number,
    required: false,
  },

  update: {
    type: String,
    required: false,
  },
});

const FilmModel = mongoose.model('Movies',filmSchema);

module.exports = FilmModel;