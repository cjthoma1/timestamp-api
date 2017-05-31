var express = require("express");
var app = express();
var path = require('path');
app.use(express.static(path.resolve(__dirname, 'client')))
app.get('/:number', (req, res) =>{
    var param =  req.params.number.toString();
    if(new Date(param)) {
         var date = new Date(param) 
        return res.send(JSON.stringify({"unix": date.getTime(), "natural": date.getMonth()+" "+ date.getDay()+ ", " + date.getFullYear()}));
       
    }
    else{
        return res.end(JSON.stringify({"unix": null, "natural": null}));
    }
   
})

app.get("*", function(req, res) {
  res.end("404");
});

app.listen('8080', () => {
    console.log('Example app listening on port 8080!')
})