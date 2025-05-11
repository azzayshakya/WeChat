import { useState, useEffect, useRef } from "react";

const ChatInterface = () => {
  const initialMessages = [
    {
      id: 1,
      user: { name: "Sarah", initial: "S", color: "bg-secondary" },
      message: "Hey everyone! Has anyone tried the new React 19 features yet?",
      time: "10:32 AM",
      type: "user",
    },
    {
      id: 2,
      user: { name: "Jake", initial: "J", color: "bg-warning-foreground" },
      message: "Not yet. What's new in this version?",
      time: "10:33 AM",
      type: "user",
    },
    {
      id: 3,
      user: { name: "Alex", initial: "A", color: "bg-info-foreground" },
      message: "@ai Can you explain what's new in React 19?",
      time: "10:34 AM",
      type: "user",
      highlight: true,
    },
    {
      id: 4,
      user: { name: "ChatBot", initial: "AI", color: "bg-primary" },
      message:
        "React 19 introduced several exciting features including improved server components, automatic memoization, and a new concurrent rendering mode that helps with performance optimization.",
      time: "10:35 AM",
      type: "ai",
    },
    {
      id: 5,
      user: { name: "Jake", initial: "J", color: "bg-warning-foreground" },
      message: "Thanks! I'll check it out this weekend.",
      time: "10:36 AM",
      type: "user",
    },
    {
      id: 6,
      user: { name: "Sarah", initial: "S", color: "bg-secondary" },
      message:
        "I've been playing with the new hooks. @ai what's the best use case for the new useOptimistic hook?",
      time: "10:37 AM",
      type: "user",
      highlight: true,
    },
    {
      id: 7,
      user: { name: "ChatBot", initial: "AI", color: "bg-primary" },
      message:
        "The useOptimistic hook is great for creating responsive UIs during data mutations. It lets you show an optimistic UI state while the actual update happens in the background, which helps your app feel faster.",
      time: "10:38 AM",
      type: "ai",
    },
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [userInput, setUserInput] = useState("");
  const [showTip, setShowTip] = useState(true);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const loopTimeout = setTimeout(() => {
      setMessages(initialMessages);
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = 0;
      }
    }, 30000);

    return () => clearTimeout(loopTimeout);
  }, [messages]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const tipTimeout = setTimeout(() => {
      setShowTip(false);
    }, 10000);

    return () => clearTimeout(tipTimeout);
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      user: { name: "You", initial: "Y", color: "bg-success" },
      message: userInput,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      type: "user",
    };

    setMessages([...messages, newMessage]);
    setUserInput("");

    if (userInput.includes("@ai")) {
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          user: { name: "ChatBot", initial: "AI", color: "bg-primary" },
          message:
            "I'm here to help! This is a simulated response to your question.",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          type: "ai",
        };
        setMessages((prev) => [...prev, aiResponse]);
      }, 1000);
    }
  };

  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl">
          Experience Our Chat Platform
        </h2>

        <div className="mx-auto max-w-4xl rounded-lg border border-border bg-card shadow-lg">
          <div className="bg-navy-blue flex items-center justify-between p-4 text-white">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <span className="font-bold">T</span>
              </div>
              <div>
                <h3 className="font-bold">Tech Enthusiasts</h3>
                <p className="text-sm text-muted-foreground">
                  5 members, 1 AI assistant
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="rounded-full p-2 hover:bg-white hover:bg-opacity-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {showTip && (
            <div className="bg-info/10 border-info/20 border-b p-3 text-center">
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="mr-2 h-5 w-5 text-info"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm">
                  Pro Tip: Use <strong>@ai</strong> to ask questions to the AI
                  assistant!
                </span>
              </div>
            </div>
          )}

          <div
            ref={chatContainerRef}
            className="h-80 overflow-y-auto bg-white p-4"
          >
            {messages.map((msg) => (
              <div key={msg.id} className="mb-4 flex">
                <div
                  className={`mr-2 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${msg.user.color}`}
                >
                  <span className="text-sm font-bold text-white">
                    {msg.user.initial}
                  </span>
                </div>
                <div
                  className={`max-w-xs rounded-lg rounded-tl-none ${msg.type === "ai" ? "bg-info" : "bg-muted"} ${msg.highlight ? "border-primary/30 border-2" : ""} p-3 md:max-w-md`}
                >
                  <p className="text-sm font-bold">{msg.user.name}</p>
                  <p>
                    {msg.highlight ? (
                      <span>
                        <span className="font-medium text-primary">@ai</span>
                        {" " + msg.message.split("@ai")[1]}
                      </span>
                    ) : (
                      msg.message
                    )}
                  </p>
                  <p className="text-xs mt-1 text-muted-foreground">
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border p-4">
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <button
                type="button"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Type your message... (Try @ai for AI help)"
                className="gcl-form-control focus:ring-primary/20 flex-1 rounded-lg bg-input px-4 py-2 focus:ring"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <button
                type="submit"
                className="rounded-lg bg-primary p-2 text-white transition-colors hover:bg-opacity-90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatInterface;
