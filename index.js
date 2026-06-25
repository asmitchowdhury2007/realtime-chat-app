const express = require('express');
const app = express();
const http = require("http");
const { Server } = require('socket.io');
const path = require('path');

// server creation
const server = http.createServer(app); 
const io = new Server(server);


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

io.on("connection", (socket)=>{
    console.log("A new user entered");

    socket.username = "Anonymous";

    socket.on("chat messages", (msg) => {
        io.emit("chat messages",{
            username: socket.username,
            message: msg,
            timestamp: new Date().toISOString(),
        });
    });

    socket.on('set username', (newUsername)=>{
        let oldusername = socket.username;
        socket.username = newUsername;
        io.emit('change',{
            oldusername : oldusername,
            newusername : socket.username,

        });
    });
    
    socket.on('disconnect', ()=>{
        io.emit('left room', {
            username:socket.username,
        })
    })


    
})


server.listen(5000, ()=> console.log("Server started..."));