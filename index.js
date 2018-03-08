var express = require('express'),
    bodyParser = require("body-parser"),
    app=express();

var todoRoutes = require("./routes/todos");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/views')) // ta linia jest potzrebna do tego zeby plik html byl znaleziony i wczytany

//okreslamy jaki plik ma sie wyswietlac na stronie glownej
app.get('/', function(req, res){
    res.sendFile("index.html")
});

app.use('/api/todos', todoRoutes);

app.listen(process.env.PORT, function(){
    console.log("APP IS RUNNING " + process.env.PORT)
}); 
