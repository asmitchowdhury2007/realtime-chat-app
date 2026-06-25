function userHandler(socket,io){
    socket.on('set username', (newUsername)=>{
        let oldusername = socket.username;
        socket.username = newUsername;
        io.emit('change',{
            oldusername : oldusername,
            newusername : socket.username,

        });
    });
    
}
module.exports = {
    userHandler,
}