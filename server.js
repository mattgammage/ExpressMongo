var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27018/test')
.then(()=>{
    console.log('Connected');
})
.catch(err =>{
    console.log('Not Connected to DB')
})

app.get('/',(req, res)=>{
    res.send('This is the Home page')
})

app.get('/about',(req, res)=>{
    res.send('This is the About page')
})

//Listening for requests on port 3000
app.listen(3000, ()=>{
    console.log('Server listening on port 3000');
})

