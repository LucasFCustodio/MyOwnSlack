const express = require('express');
const app = express();
const socketio = require('socket.io');

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(9000);
const io = socketio(expressServer);

io.on("connection", (socket) => {
    console.log(`Client connected with socket id: ${socket.id}`);
    //Server socket will emit a message to the client once the connection is established
    socket.emit("Welcome", "Welcome to the Server");
})