// import mongoose module
const mongoose = require('mongoose')

// create schema 
var userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true // user is required
    },

    age:{
        type: Number,
        required: false // age is not required
    },

    password:{
        type: String,
        required: true // password is required
    }
})


// module exported here
module.exports = mongoose.model('User',userSchema)