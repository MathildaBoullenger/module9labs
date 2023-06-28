const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);

const connectedNicknames = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  //console.log('a user connected');
  socket.broadcast.emit("user connected", "A new user is connected"); //emitting the 'connection' event to all connected sockets except the socket that triggered the event

  socket.on("chat message", (data) => {
    io.emit("chat message", { message: data.message, nickname: data.nickname });
  });

  //by using the broadcast functionality, we can pass the nickname of the typing person to all other sockets and on the client side, 
  //the nickname will be used in the message saying who is typing
  socket.on("typing", (nickname) => {
    socket.broadcast.emit("typing", nickname);
  });

  //the same principle is used when someone stops typing
  socket.on("typing-stop", (nickname) => {
    socket.broadcast.emit("typing-stop", nickname);
  });

  socket.on("disconnect", () => {
    const index = connectedNicknames.indexOf(socket.nickname);
    if (index !== -1) {
      connectedNicknames.splice(index, 1);
      io.emit("user list", connectedNicknames);
    }
    socket.broadcast.emit("user disconnected", "A user disconnected"); //emitting the 'disconnect' event to all connected sockets except the socket that triggered the event
  });

  socket.on("nickname", (nickname) => {
    socket.nickname = nickname; // storing the nickname value in the socket object
    connectedNicknames.push(nickname);
    io.emit("user list", connectedNicknames.join(", "));
    socket.broadcast.emit("connection", nickname);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
