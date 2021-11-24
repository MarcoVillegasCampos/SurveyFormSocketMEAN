const express = require( 'express' );
const app = express();
const server = app.listen(8080);
app.use(express.static(__dirname + "/static"));


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
const io = require( 'socket.io' )( server );

io.on( 'connection', function( socket ){
   
    console.log( "Someone just connected!" );
    socket.on( 'posting_form', function( data ){
        var random=Math.floor(Math.random()*1000+1);
      
        socket.emit( 'updated_message', {msg:`you emitted the following information...Name: ${data.name}, Location: ${data.location}, Favorite Language: ${data.language}, Comment: ${data.comment}`});
        socket.emit( 'random_number', {msg:`your lucky number emitted by the server is : ${random}`});
    });
});

app.get("/", function(request,response){
    response.render("form");
})

app.post("/info", function(request,response){
    response.redirect("/");
})