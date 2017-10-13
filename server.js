const express = require("express"),
app = express(),
port = process.argv[2] || 3000;

//middleware - it will log date everytime a request is recieved
app.use(function(req, res, next){
    console.log("Recieved request at "+ Date.now());
    next();
})

app.get('/hello', function (req, res) {
    let message = "Hello World";
    res.send(message);
})

app.get('/', function (req, res) {
    let message = "Home";
    res.send(message);
})



//you can serch files from a directory named public
app.use(express.static('public')); // we have test.html in public directory. It will rendered with url localhost:3000/test.html we dont need to provide the directory name in the path

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

app.get('/json', function (req, res) {
    let json = {name:"hello"};
    res.json(json);
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
    res.send("The sum of 1 to "+ n + " is: <strong>"+ sum +"</strong>");
})