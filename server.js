var express = require("express"),
app = express(),
path = require('path'),
port = process.env.PORT || '8080';
 
app.use(express.static(path.resolve(__dirname, 'client')))
app.get('/:number', (req, res) =>{
    var param =  parseInt(req.params.number) ? req.params.number*1000 : req.params.number.toString();
    
    if(new Date(param)) {
         var date = new Date(param), 
         natural= date.toLocaleString("en-us", { month: "long", day: 'numeric',  year: 'numeric'}), 
         unix = date.getTime()/1000,
         dateObj = {"unix": unix, "natural": natural};
         
        return res.json(dateObj);
       
    }
    else{
         dateObj = {"unix": null, "natural": null}
        return res.send(dateObj);
    }
   
})

app.get("*", function(req, res) {
  res.end("404");
});

app.listen(port, () => {
    console.log('Example app listening on port 8080!')
})