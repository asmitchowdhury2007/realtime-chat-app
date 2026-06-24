const express = require('express');
const app = express();
const http = require("http");
const { Server } = require('socket.io');

// server creation
const server = http.createServer(app); 
const io = new Server(server);
server.listen(5000, ()=> console.log("Server started..."));
