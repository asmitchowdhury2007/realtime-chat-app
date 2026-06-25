const {chatHandler} = require("./chatHandler")
const {userHandler} = require("./userHandler")

function socketHandler(io){
    io.on("connection", (socket)=>{
        console.log("A new user entered");

        socket.username = "Anonymous";
        chatHandler(socket,io);
        userHandler(socket,io);

        socket.on('disconnect', ()=>{
            io.emit('left room', {
            username:socket.username,
            })
        })
    });
}
module.exports ={
    socketHandler
}