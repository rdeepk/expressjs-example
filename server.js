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
    //use url /randomnumber?range=40
    let range = req.query.range;
    let random = (Math.floor(Math.random()*range));
    res.send("Random number between 0 to "+ range + "is: "+ random.toString());
})

app.get('/goodbye', function (req, res) {
    let message = "Goodbye World";
    res.send(message);
})

app.listen(port, function(){
    console.log("Listening to: "+ port);
});

app.get('/sum', function(req, res) {
    let n = req.query.n;
    if(n=== '0') { //  every query string will be a string so 0 is not a number
        res.status(500).send("cant sum 0");
    }
    let sum = 0;
    for (i=0; i<= n; i++) {
        sum += i;
    }
    res.send("The sum of 1 to "+ n + " is: "+ sum);
})