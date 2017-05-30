var express = require("express");
var app = express();
var path = require('path');
app.use(express.static(path.resolve(__dirname, 'client')))
app.get('/:number', (req, res) =>{
    var date =  req.params.number
    if(parseInt(date)) {
        return res.send("Hello " + date +"!");
    }
    else{
        return res.end('NULL');
    }
   
})

app.get("*", function(req, res) {
  res.end("404");
});

app.listen('8080', () => {
    console.log('Example app listening on port 8080!')
})