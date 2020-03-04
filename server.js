var express = require('express');
var app = express();

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

