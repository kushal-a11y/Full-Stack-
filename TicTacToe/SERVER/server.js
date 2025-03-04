const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

app.use(cors({ origin: "http://localhost:3000" }));

const io = new Server(server, {
    cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] },
});

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);
    
    socket.on("disconnect", () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});

app.get("/", (req, res) => {
    res.send("Server is running! 🚀");
});


const PORT = 5002;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
