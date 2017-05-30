var express = require("express");
var app = express();
var path = require('path');
app.use(express.static(path.resolve(__dirname, 'client')))
app.get('/hello', (req, res) =>{
    res.send("Hello World!");
})

app.listen('8080', () => {
    console.log('Example app listening on port 8080!')
})