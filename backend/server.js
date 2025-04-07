import http from "http";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import app from "./app.js";
import { Server } from "socket.io";

dotenv.config();

const port = process.env.PORT || 3000;
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.use((socket, next) => {
  const token =
    socket.handshake.auth?.token ||
    socket.handshake.headers?.authorization?.split(" ")[1];

  if (!token) {
    return next(new Error("No token provided"));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    socket.user = decoded;
    next();
  } catch (err) {
    return next(new Error("Authentication failed"));
  }
});

io.on("connection", (socket) => {
  console.log("New user connected brother ");
  // console.log("🟢 New connection:", socket.id);
  console.log("👤 Authenticated user connected :", socket.user);

  socket.on("disconnect", () => {
    console.log("🔌 Disconnected:", socket.id);
  });
});

server.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
