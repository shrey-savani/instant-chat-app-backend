const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");

const PORT = 3500;
const users = [{}];

const app = express();
app.use(cors({
    origin: [process.env.FRONTEND_URI],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.get("/", (req, res) => {
    res.send('Connected to the server');
});

const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", (socket) => {
    console.log("connection establised", socket.id)
    socket.on("joined", ({ user }) => {
        users[socket.id] = user;
        console.log(`${user} has --joined--`);
        socket.broadcast.emit('userJoined', { user: "Admin", message: `${users[socket.id]} has joined as a broadcast` });
        socket.emit('welcome', { user: "Admin", message: `${users[socket.id]} Welcome to the chat` });
    });

    socket.on('disconnect', () => {
        socket.broadcast.emit('leave', { user: "Admin", message: `${users[socket.id]} has left` });
        console.log(users[socket.id] + " Left")
    });

    socket.on('message', ({ message, id, roomInputId }) => {
        if(roomInputId === "" || roomInputId === null){
            io.emit('sendMessage', { user: users[id], message, id })
        }else{
            io.to([roomInputId, id]).emit('sendMessage', { user: users[id], message, id })
        }
    })

});

server.listen(PORT, () => {
    console.log(`Server Running on the port number: ${PORT}`);
});