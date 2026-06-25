function chatHandler(socket,io){
    socket.on("chat messages", (msg) => {
        io.emit("chat messages",{
            username: socket.username,
            message: msg,
            timestamp: new Date().toISOString(),
        });
    });
}
module.exports ={
    chatHandler,
}