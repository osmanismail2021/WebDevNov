// mlab.com > free and life-time database 500mb
// mongodb://localhost:27017/webdevnov
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Post = require('./models/Post')
var bodyParser = require('body-parser')
const User = require('./models/User')
const jwt = require('jsonwebtoken')
// bodyparser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/webdevnov', { useNewUrlParser: true }
    , (err) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log('connected to mongodb')
        }

    })


app.get('/', (req, res) => {
    res.send('hello')
})

// app.get('/:webdevnov',(req,res)=>{
//     console.log(req.params)
// })

app.post('/register',(req,res)=>{
    console.log(req.body)
    const user = new User(req.body)
    user.save()
    .then(response=>{
        res.json({
            response,
            message:'user created'
        })
    })
})

// login route
app.post('/login',(req,res)=>{
    const {username,password} = req.body
    User.findOne({username})
    .then(user=>{
        if(!user){
            res.json({
                message:'user not found'
            })
        }
        if(user.password !== password){
            res.json({
                message:'user or password is incorrect'
            })
        }

        if(user.password === password){
            const token = jwt.sign({
                username,
                userId:user._id
            },'intecbrussel',{expiresIn:'1h'})
            res.json({
                message:'User logged in',
                token
            })
        }
    })
   // res.json(req.body)
})


// Get all posts { 2 requests in same endpoint }
app.get('/posts', (req, res) => {
    console.log(req.query)
    if (req.query.id !==undefined) {
        // get post by id
        Post.findById({ _id: req.query.id }, (err, post) => {
            if (err) {
                console.log(err)
            }
            else {
                res.json(post)
            }
        })
    } else {
        // get all posts
        Post.find({}) // {} everything in collection
            .then(posts => {
                res.json(posts)
            })
    }

})

// Create a new post
app.post('/posts', (req, res) => {

    const VariablePost = new Post(req.body)
    VariablePost.save()
        .then(response => {
            res.json(response)
        })
    //console.log(req.body)
})

// /:
// get a single post
// app.get('/posts/:intecbrussel', (req, res) => { // http//localhost/posts/4 > id
//     // http://localhost:1337/posts/626656a5dfcd586ff5bb8cad
//     const id = req.params.intecbrussel
//     //  console.log(req.params)
//     // console.log(`id is ${id}`)
//     Post.findById({ _id: id }, (err, post) => {
//         if (err) {
//             console.log(err)
//         }
//         else {
//             res.json(post)
//         }
//     })
// })




app.listen(1337, () => {
    console.log('listening on port 1337')
})