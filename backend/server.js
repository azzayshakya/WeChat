import http from "http";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import app from "./app.js";
import { Server } from "socket.io";
import mongoose from "mongoose";
import Project from "./models/project.model.js";

dotenv.config();

const port = process.env.PORT || 3000;
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    // methods: ["GET", "POST"],
    credentials: true,
  },
});

io.use(async (socket, next) => {
  const token =
    socket.handshake.auth?.token ||
    socket.handshake.headers?.authorization?.split(" ")[1];
  const projectId = socket.handshake.query.projectId;

  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    return next(new Error("Invalid project id for Chat connection"));
  }

  if (!token) {
    return next(new Error("No token provided"));
  }
  
  // Find the project and attach it to the socket
  socket.project = await Project.findById(projectId);
  if (!socket.project) {
    return next(new Error("Project not found"));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    socket.user = decoded; // Attach user info to socket
    next();
  } catch (err) {
    return next(new Error("Authentication failed"));
  }
});

io.on("connection", (socket) => {
  const projectIdString = socket.project._id.toString();
  socket.join(projectIdString); // Join the room with the projectId

  console.log("👤 Authenticated user connected:", socket.user.email);

  // Listen for 'project-message' events
  socket.on("project-message", (messageData) => {
    // Broadcast the message to all users in the project room
    io.to(projectIdString).emit("project-message", {
      message: messageData.Message,
      sender: socket.user.email,
      timestamp: new Date().toISOString(),
    });
    console.log("Message sent:", messageData);
  });

  socket.on("disconnect", () => {
    console.log("🔌 Disconnected:", socket.id);
  });
});
server.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
