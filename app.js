//Packages
let express = require('express'),
    bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/public'))

//Models
let todoAPIRoutes = require('./routes/todoAPI');
app.use("/api/todos", todoAPIRoutes);

app.get("/", function(req, res){
    res.sendFile('index.html')
})

let port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Zen Todo Started on Port "+port);
})