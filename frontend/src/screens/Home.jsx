import Navbar from "@/components/Navbar";
import { Navigate, useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const NavigateToProjectsPage = () => {
    navigate("/projects");
  };
  return (
    <div className="min-h-screen bg-background font-nunito">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-navy-blue py-12 text-white md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                Chat Smarter with AI-Powered Groups
              </h2>
              <p className="mb-6 text-lg text-muted md:text-xl">
                Connect with friends, colleagues, and AI assistants in one
                seamless platform.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  className="rounded-lg bg-primary px-6 py-3 text-white transition-colors hover:bg-opacity-90"
                  onClick={NavigateToProjectsPage}
                >
                  Get Started
                </button>
                <button className="rounded-lg border border-white bg-transparent px-6 py-3 text-white transition-colors hover:bg-white hover:bg-opacity-10">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://www.computer-talk.com/images/default-source/blogs/ai-chatbot-customer-service.jpg?sfvrsn=84c85ff6_1"
                alt="Chat Platform Preview"
                className="h-auto max-w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="bg-background py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl">
            Experience Our Chat Platform
          </h2>

          <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border border-border bg-card shadow-lg">
            {/* Chat Header */}
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

            {/* Chat Messages */}
            <div className="h-80 overflow-y-auto bg-white p-4">
              {/* User Message */}
              <div className="mb-4 flex">
                <div className="mr-2 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-secondary">
                  <span className="text-sm font-bold text-white">S</span>
                </div>
                <div className="max-w-xs rounded-lg rounded-tl-none bg-muted p-3 md:max-w-md">
                  <p className="text-sm font-bold">Sarah</p>
                  <p>
                    Hey everyone! Has anyone tried the new React 19 features
                    yet?
                  </p>
                  <p className="text-xs mt-1 text-muted-foreground">10:32 AM</p>
                </div>
              </div>

              {/* AI Message */}
              <div className="mb-4 flex">
                <div className="mr-2 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                  <span className="text-sm font-bold text-white">AI</span>
                </div>
                <div className="max-w-xs rounded-lg rounded-tl-none bg-info p-3 md:max-w-md">
                  <p className="text-sm font-bold">ChatBot</p>
                  <p>
                    React 19 introduced several exciting features including
                    improved server components, automatic memoization, and a new
                    concurrent rendering mode.
                  </p>
                  <p className="text-xs mt-1 text-muted-foreground">10:33 AM</p>
                </div>
              </div>

              {/* Another User Message */}
              <div className="mb-4 flex">
                <div className="mr-2 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-warning-foreground">
                  <span className="text-sm font-bold text-white">J</span>
                </div>
                <div className="max-w-xs rounded-lg rounded-tl-none bg-muted p-3 md:max-w-md">
                  <p className="text-sm font-bold">Jake</p>
                  <p>
                    I have been playing with it for a couple days now. The
                    performance improvements are really noticeable!
                  </p>
                  <p className="text-xs mt-1 text-muted-foreground">10:35 AM</p>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="border-t border-border p-4">
              <div className="flex space-x-2">
                <button className="rounded-full p-2 text-muted-foreground transition-colors hover:text-primary">
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
                  placeholder="Type your message..."
                  className="gcl-form-control focus:ring-primary/20 flex-1 rounded-lg bg-input px-4 py-2 focus:ring"
                />
                <button className="rounded-lg bg-primary p-2 text-white transition-colors hover:bg-opacity-90">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl">
            Why Choose WeChat?
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <div className="bg-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-6 w-6 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Smart Group Chats</h3>
              <p className="text-muted-foreground">
                Create topic-focused group chats with friends, colleagues, and
                AI assistants all in one place.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <div className="bg-secondary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-6 w-6 text-secondary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">AI-Powered Assistance</h3>
              <p className="text-muted-foreground">
                Get instant answers, suggestions, and help from our advanced AI
                that learns from your group interactions.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <div className="bg-info/20 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-6 w-6 text-info-foreground"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Secure Conversations</h3>
              <p className="text-muted-foreground">
                End-to-end encryption ensures your conversations remain private
                and secure at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            Ready to Transform Your Communication?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-muted-foreground">
            Join thousands of users who are already experiencing the future of
            group chat with AI-powered assistance.
          </p>
          <button
            className="rounded-lg bg-primary px-6 py-3 text-white transition-colors hover:bg-opacity-90"
            onClick={Navigate}
          >
            Get Started Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-blue py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-6 w-6 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
                <h3 className="text-lg font-bold">WeChat</h3>
              </div>
              <p className="text-sm text-muted">
                Revolutionizing the way we communicate with AI-enhanced group
                chats.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-bold">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="transition-colors hover:text-primary">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-primary">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-primary">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-primary">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-bold">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="transition-colors hover:text-primary">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-primary">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-primary">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-primary">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-bold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="transition-colors hover:text-primary">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-primary">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-primary">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-primary">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between border-t border-white/10 pt-8 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2025 WeChat. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-4 md:mt-0">
              <a
                href="https://www.facebook.com/azzayshakya"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://github.com/azzayshakya"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 20.13V24"></path>
                </svg>
              </a>

              <a
                href="https://www.instagram.com/azzayshakya"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/azzayshakya/"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
