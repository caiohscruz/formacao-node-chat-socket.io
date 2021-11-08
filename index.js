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
        socket.emit("showmessage", data);
    });
});

app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    res.render("index");
})


http.listen(3000, ()=> {
    console.log("App rodando")
})