const socket = io('localhost:9000');

socket.on("connect", () => {
    console.log("connected");
    socket.emit("clientConnect");
})

socket.on("Welcome", (data) => {
    console.log(data);
})