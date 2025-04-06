// ChatPageMain.jsx

import { useState } from "react";
import Navbar from "@/components/Navbar";
import UserList from "./components/UsersList";
import { useParams } from "react-router-dom";

export default function ChatPageMain() {
  const { projectId } = useParams();
  const [showUserList, setShowUserList] = useState(false);

  const handleAddUserClick = () => {
    setShowUserList(true);
  };

  const handleCloseUserList = () => {
    setShowUserList(false);
  };

  return (
    <div className="h-screen">
      <Navbar />
      <div className="relative flex h-full w-full overflow-hidden">
        {showUserList && (
          <div className="fixed left-0 top-0 z-50 h-full w-full animate-slide-in-left md:w-1/3">
            <UserList
              onClose={handleCloseUserList}
              projectId={projectId}
            />
          </div>
        )}

        <div className="flex w-full border">
          {/* Left Panel */}
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

            {/* Chat Messages */}
            <div className="flex-1 space-y-3 overflow-auto bg-background p-4">
              {/* Dummy messages */}
              <div className="mb-4 flex">
                <div className="bg-secondary rounded-full w-8 h-8 flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <div className="bg-muted rounded-lg rounded-tl-none p-3 max-w-xs md:max-w-md">
                  <p className="text-sm font-bold">Sarah</p>
                  <p>Hey everyone! Has anyone tried the new React 19 features yet?</p>
                  <p className="text-xs text-muted-foreground mt-1">10:32 AM</p>
                </div>
              </div>
              
              {/* AI Message */}
              <div className="mb-4 flex">
                <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
                <div className="bg-info rounded-lg rounded-tl-none p-3 max-w-xs md:max-w-md">
                  <p className="text-sm font-bold">ChatBot</p>
                  <p>React 19 introduced several exciting features including improved server components, automatic memoization, and a new concurrent rendering mode.</p>
                  <p className="text-xs text-muted-foreground mt-1">10:33 AM</p>
                </div>
              </div>
              
              {/* Another User Message */}
              <div className="mb-4 flex">
                <div className="bg-warning-foreground rounded-full w-8 h-8 flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-white font-bold text-sm">J</span>
                </div>
                <div className="bg-muted rounded-lg rounded-tl-none p-3 max-w-xs md:max-w-md">
                  <p className="text-sm font-bold">Jake</p>
                  <p>I have been playing with it for a couple days now. The performance improvements are really noticeable!</p>
                  <p className="text-xs text-muted-foreground mt-1">10:35 AM</p>
                </div>
              </div>
            </div>
            
            {/* Input Box */}
            <div className="border-t border-border p-4">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 rounded-lg border border-muted bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="hover:bg-primary/90 rounded-lg bg-primary p-2 text-white transition" title="Send">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* AI Section */}
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
