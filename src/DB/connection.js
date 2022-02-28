const mongoose = require('mongoose');
require('dotenv').config();

const connection = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('connected to db')
    } catch (error) {
        console.log(error)
    }
}

connection()

module.exports = connection;

//npm i dotenv
//create .env at top level folder
//make folder db and file connection.js in src
// call the env by saying require("dotenv").config(); in connections.js


//function connect to database (process.env.MONGO_URI);
//get Mongo URI from the cluser and change password, assign it a variable in env
// call this variable like below
// user1=> my password



//**//
// const { MongoClient } = require("mongodb");


// const connection = async (crudFunc, movieObj) => {
//  try {
//      const client = new MongoClient(process.env.MONGO_URI)
//      await client.connect();
//      const db = client.db("myFirstDatabase");
//      const collection = db.collection("Movies");
//      await crudFunc(collection, movieObj);
//      client.close();
     
//  } catch (error) {
//      console.log(error)
     
//  }

// };
//**//