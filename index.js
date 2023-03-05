const express = require('express')
const port = 8000
const app = express()

// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded())

// set up Database
// const db = require('./config/mongoose')
// const todoModel = require('./models/task')

//set up EJS
app.set('view engine','ejs')
app.set('views','./views')

 // set up Router
app.use('/',require('./routes'))

app.listen(port,function(err){
    if(err){
     console.log(`Error: ${err}`)
     return
    }
    console.log(`server is running on port: ${port}`)
    
})