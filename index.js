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
    
})


server.listen(5000, ()=> console.log("Server started..."));