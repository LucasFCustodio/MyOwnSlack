const express = require('express');
const app = express();
const socketio = require('socket.io');

app.use(express.static(__dirname + "/public"));

const server = app.listen(8000);
const io = socketio(server);

io.on("connection", (socket) => {
    console.log(`Client connected with socket id: ${socket.id}`);
    //Server socket will emit a message to the client once the connection is established
    socket.emit("serverMessage", 
        {ServerData: `Welcome! We are now connected to the same socket ${socket.id}`});
    //The server will receive a message from the client
    socket.on("clientMessage", (clientData) => {
        console.log(clientData);
        io.emit("newMessageToClients", clientData);
    })
})