const mongoose = require('mongoose')


var postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: false
    }
})

module.exports  = mongoose.model('Post', postSchema)