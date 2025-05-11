import { useState, useContext, useEffect } from "react";
import Navbar from "@/components/Navbar";
import UserList from "./components/UsersList";
import { useParams } from "react-router-dom";
import { UserContext } from "@/context/user.context";
import { useRef } from "react";
import Markdown from "markdown-to-jsx";
import {
  initializeSocket,
  sendMessage,
  receiveMessage,
} from "@/context/socket";
import { useProjectDetails } from "./constants/useGetProjectDetails";

export default function ChatPageMain() {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const user = useContext(UserContext);
  const { projectId } = useParams();
  const [showUserList, setShowUserList] = useState(false);
  const [showAIPanel, setShowAIPanel] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const { project, fetchProjectDetails, isLoading } = useProjectDetails();

  useEffect(() => {
    if (projectId) {
      fetchProjectDetails(projectId);
    }
  }, [projectId, fetchProjectDetails]);

  const handleAddUserClick = () => setShowUserList(true);
  const handleCloseUserList = () => setShowUserList(false);
  const toggleAIPanel = () => setShowAIPanel((prev) => !prev);

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
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
          {/* Chat message section */}
          <div
            className={`flex flex-col border-r border-border bg-white shadow-md transition-all duration-300 ease-in-out ${showAIPanel ? "w-1/3 md:w-1/3" : "w-full"}`}
          >
            <div className="flex flex-row items-center justify-between gap-3 bg-secondary p-4 text-white md:gap-0">
              <div>
                <h2 className="text-lg font-semibold">
                  {isLoading ? "Loading..." : project?.name || "Project X"}
                </h2>
                <p className="text-nowrap text-sm text-muted-foreground">
                  {isLoading
                    ? "Loading..."
                    : `${project?.users?.length || 0} Collaborators`}
                </p>
              </div>
              <button
                onClick={handleAddUserClick}
                className="hover:bg-primary/90 text-nowrap rounded-md bg-primary px-3 py-3 text-sm text-white transition"
              >
                + Add User
              </button>
            </div>

            {import.meta.env.PROD && (
              <div className="border-l-4 border-red-500 bg-red-100 p-4 text-sm text-red-700">
                <p>
                  <strong>Notice:</strong> Chat functionality is unavailable on
                  this hosted version because Vercel does not support WebSocket
                  connections.
                  <br />
                  To experience the full functionality, please run the project
                  locally.
                  <br />
                  Contact details can be found on the{" "}
                  <a href="/about" className="text-blue-600 underline">
                    About Us
                  </a>{" "}
                  page.
                </p>
              </div>
            )}

            <div className="message-box flex-1 space-y-3 overflow-auto bg-background p-4">
              {messages.map((msg, index) => {
                const isCurrentUser = msg.sender === user.user.email;
                return (
                  <div
                    key={index}
                    className={`mb-4 flex ${isCurrentUser ? "justify-end" : ""}`}
                  >
                    <div
                      className={`mr-2 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
                        isCurrentUser ? "bg-primary" : "bg-secondary"
                      }`}
                    >
                      <span className="text-sm font-bold text-white">
                        {msg.sender[0]}
                      </span>
                    </div>
                    <div
                      className={`max-w-xs rounded-lg rounded-tl-none p-3 md:max-w-md ${isCurrentUser ? "bg-info" : "bg-muted"}`}
                    >
                      <p
                        className={`text-sm font-bold ${isCurrentUser ? "text-black" : ""}`}
                      >
                        {msg.sender}
                      </p>
                      <div className="break-words text-sm">
                        {msg.sender === "ai" ? (
                          <div className="overflow-auto">
                            <Markdown>{msg.message}</Markdown>
                          </div>
                        ) : (
                          <p>{msg.message}</p>
                        )}
                      </div>
                      <p className="text-xs mt-1 text-muted-foreground">
                        {new Date(msg.timestamp).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
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

          {/* AI Panel  */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              showAIPanel ? "w-2/3 animate-slide-in-right" : "w-15 px-2 py-2"
            }`}
          >
            <div className="flex justify-end bg-secondary p-2">
              <button
                onClick={toggleAIPanel}
                className="hover:bg-primary/90 rounded-lg bg-primary p-2 text-white transition"
                title={showAIPanel ? "Collapse AI Panel" : "Expand AI Panel"}
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
                    d={
                      showAIPanel
                        ? "M11 19l-7-7 7-7m8 14l-7-7 7-7" // Left arrows when expanded (to collapse)
                        : "M13 5l7 7-7 7M5 5l7 7-7 7" // Right arrows when collapsed (to expand)
                    }
                  />
                </svg>
              </button>
            </div>

            <div
              className={`h-full transition-opacity duration-300 ${showAIPanel ? "opacity-100" : "opacity-0"}`}
            >
              {showAIPanel && (
                <div className="h-full w-full overflow-auto bg-background p-6">
                  <div className="flex h-full w-full items-center justify-center rounded-xl border border-dashed border-border text-lg text-muted-foreground">
                    AI Response Area
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
