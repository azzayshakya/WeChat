import { useState, useContext, useEffect } from "react";
import Navbar from "@/components/Navbar";
import UserList from "./components/UsersList";
import { useParams } from "react-router-dom";
import { UserContext } from "@/context/user.context";
import {
  initializeSocket,
  sendMessage,
  receiveMessage,
} from "@/context/socket";

export default function ChatPageMain() {
  const user = useContext(UserContext);
  const { projectId } = useParams();
  const [showUserList, setShowUserList] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleAddUserClick = () => setShowUserList(true);
  const handleCloseUserList = () => setShowUserList(false);

  const handleSendMessage = () => {
    if (message.trim()) {
      sendMessage("project-message", {
        message,
        sender: user.user.email,
      });
      setMessage("");
    }
  };

  useEffect(() => {
    const socket = initializeSocket(projectId);

    receiveMessage("project-message", (data) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: data.sender,
          message: data.message,
          timestamp: data.timestamp,
        },
      ]);
    });

    return () => {
      if (socket) socket.disconnect();
    };
  }, [projectId]);

  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <div className="relative flex h-full w-full overflow-hidden">
        {showUserList && (
          <div className="fixed left-0 top-0 z-50 h-full w-full animate-slide-in-left md:w-1/3">
            <UserList onClose={handleCloseUserList} projectId={projectId} />
          </div>
        )}

        <div className="flex w-full border">
          <div className="flex w-full flex-col border-r border-border bg-white shadow-md md:w-1/3">
            <div className="flex items-center justify-between bg-secondary p-4 text-white">
              <div>
                <h2 className="text-lg font-semibold">Project X</h2>
                <p className="text-sm text-muted-foreground">5 Collaborators</p>
              </div>
              <button
                onClick={handleAddUserClick}
                className="hover:bg-primary/90 rounded-md bg-primary px-3 py-3 text-sm text-white transition"
              >
                + Add User
              </button>
            </div>

            <div className="message-box flex-1 space-y-3 overflow-auto bg-background p-4">
              {messages.map((msg, index) => {
                const isCurrentUser = msg.sender === user.user.email;
                return (
                  <div
                    key={index}
                    className={`mb-4 flex ${isCurrentUser ? "justify-end" : ""}`}
                  >
                    <div
                      className={`mr-2 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${isCurrentUser ? "bg-primary" : "bg-secondary"}`}
                    >
                      <span className="text-sm font-bold text-white">
                        {msg.sender[0]}
                      </span>
                    </div>
                    <div
                      className={`max-w-xs rounded-lg rounded-tl-none p-3 md:max-w-md ${
                        isCurrentUser ? "bg-info" : "bg-muted"
                      }`}
                    >
                      <p
                        className={`text-sm font-bold ${isCurrentUser ? "text-black" : ""}`}
                      >
                        {msg.sender}
                      </p>
                      <p>{msg.message}</p>
                      <p className="text-xs mt-1 text-muted-foreground">
                        {new Date(msg.timestamp).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-border p-4">
              <div className="flex items-center gap-2">
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 rounded-lg border border-muted bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  className="hover:bg-primary/90 rounded-lg bg-primary p-2 text-white transition"
                  title="Send"
                  onClick={handleSendMessage}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full overflow-auto bg-background p-6 md:w-2/3">
            <div className="flex h-full w-full items-center justify-center rounded-xl border border-dashed border-border text-lg text-muted-foreground">
              AI Response Area (Design it later)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
