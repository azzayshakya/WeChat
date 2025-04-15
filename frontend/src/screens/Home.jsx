import ChatInterface from "@/components/ChatDemo";
import Footer from "@/components/Footer";
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

      <ChatInterface />

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

      <Footer />
    </div>
  );
};

export default Home;
