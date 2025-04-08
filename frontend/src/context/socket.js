import { io } from "socket.io-client";

let socketInstance = null;

export const initializeSocket = (projectId) => {
  const token = localStorage.getItem("wechatUserToken");
  

  if (!token) {
    console.warn("⚠️ No token found in localStorage");
    return null;
  }

  socketInstance = io("http://localhost:3000", {
    auth: { token },
    transports: ["websocket"],
    withCredentials: true,
    query:{projectId}
  });

  socketInstance.on("connect", () => {
    console.log("✅ Connected:", socketInstance.id);
  });

  socketInstance.on("connect_error", (err) => {
    console.error("❌ Connection error:", err.message);
  });

  return socketInstance;
};

export const receiveMessage = (eventName, cb) => {
  if (socketInstance) {
    socketInstance.on(eventName, cb);
  }
};

export const sendMessage = (eventName, data) => {
  if (socketInstance) {
    socketInstance.emit(eventName, data);
  }
};
