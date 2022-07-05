const express = require("express")
var app = express()
const http = require("http").Server(app)
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

var dburl = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.0'

var User = mongoose.model('Users', {
    name: String
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/status', (req, res) => {
    res.send("running")
})

app.get('/users',async (req, res) => {
    let filterObj = {}
    let pageNo = req.query.pageNo ? req.query.pageNo : 1;
    let limit = req.body.limit ? req.body.limit : 2
    if (req.query.name){
        filterObj['name'] = req.query.name
    }
    // User.find(filterObj, (err, users) => {
    //         res.send(users)
    // })

    // User.find(filterObj).limit(1)
    // .then(users => {
    //         res.send(users)
    // })
    // .then()

    let users = await User.find(filterObj).skip(limit*(pageNo - 1)).limit(limit);
    res.send(users)

})

app.get('/users/:id', (req, res) =>{
    let userId = req.params.id;
    User.findOne({_id:userId}, (err,user) =>{
        console.log(err)
            res.send(user)
    })
})

app.post('/users', (req, res) =>{
    let name = req.body.name
    let userobj = {
        name:name
    }
    var user = new User(userobj)

    user.save((err)=>{
        if(err)
            res.sendStatus(500)

        res.send(user)
    })
})

mongoose.connect(dburl, (err) => {
    console.log('db connected', err)
})

let server = http.listen(3002, () => (
    console.log("server is lestening to port:", server.address().port)
))