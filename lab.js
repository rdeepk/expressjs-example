const express = require('express'),
app = express(),
port = 2090;

app.get('/name', function(req, res){
    console.log(req.baseUrl + req.path); 
    let name = "Ramandeep";
    res.send("Hey there! I am " + name);
})

app.get('/sum', function(req, res){
    let num1 = parseInt(req.query.a),
    num2 = parseInt(req.query.b),
    num3 = parseInt(req.query.c);
    let sum = num1 + num2 + num3;
    res.send(sum.toString());
})

app.get('/color', function(req, res){
    let json = {
        red: 0,
        green: 79,
        blue: 255
    }
    res.json(json);
})

app.listen(port);