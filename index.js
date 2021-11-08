var express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

io.on("connection", (socket)=>{

    socket.on("disconnect", ()=> {
        console.log("Desconectou-se: " + socket.id)
    });

    socket.on("message", (data)=> {
        console.log(data);
        // io: server -> all clients
        io.emit("showmessage", data);
        // socket.broadcast: server -> all clients except who sends the message
        // socket.broadcast.emit("showmessage", data);

    });
});

app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    res.render("index");
})


http.listen(3000, ()=> {
    console.log("App rodando")
})