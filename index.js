var express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

io.on("connection", (socket)=>{
    
    socket.on("boasvindas", (data)=>{
        console.log("Boas Vindas")
        console.log(data);
    })

    socket.on("palavra", (data)=>{
        console.log("Palavra")
        console.log(data);
        socket.emit("resultado", data + " -  recebido");
    })
});

app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    res.render("index");
})


http.listen(3000, ()=> {
    console.log("App rodando")
})