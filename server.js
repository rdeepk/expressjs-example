const express = require("express"),
app = express(),
port = process.argv[2] || 3000;

app.get('/hello', function (req, res) {
    let message = "Hello World";
    res.send(message);
})

app.get('/', function (req, res) {
    let message = "Home";
    res.send(message);
})

app.get('/randomnumber', function (req, res) {
    res.send((Math.floor(Math.random()*10)).toString());
})

app.get('/goodbye', function (req, res) {
    let message = "Goodbye World";
    res.send(message);
})

app.listen(port, function(){
    console.log("Listening to: "+ port);
});