import { io } from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io("https://probable-fortnight-r464v47w4v672p9gg-5002.app.github.dev", {
    transports: ["websocket"],  // Forces WebSocket over polling
});
// Ensure this matches backend port

function App() {
    useEffect(() => {
        socket.on("connect", () => {
            console.log("Connected to backend!");
        });

        socket.on("matchFound", (message) => {
            alert(message);
        });

        return () => {
            socket.off("matchFound");
        };
    }, []);

    return <h1>Tic Tac Toe</h1>;
}

export default App;
