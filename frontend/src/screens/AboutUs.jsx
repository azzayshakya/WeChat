import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/create-account");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background font-nunito">
      <Navbar />

      <section className="bg-navy-blue py-12 text-white md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                About WeChat
              </h2>
              <p className="mb-6 text-lg text-muted md:text-xl">
                We are revolutionizing group communication with AI-enhanced
                technology.
              </p>

              {/* Added expanded content */}
              <div className="space-y-4">
                <p className="text-lg">
                  WeChat combines the power of real-time messaging with advanced
                  AI capabilities, creating an unprecedented communication
                  experience for teams and communities.
                </p>

                <p className="text-lg">
                  Our platform intelligently understands context, provides
                  relevant insights, and seamlessly integrates AI assistants
                  that feel like natural participants in your conversations.
                </p>

                <p className="text-lg">
                  Whether you are coordinating a project, sharing ideas with
                  teammates, or building a community around shared interests,
                  WeChat enhances every interaction with intuitive, intelligent
                  features.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/b1.svg"
                alt="Team collaboration"
                className="h-auto max-w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl">
            Our Story
          </h2>

          <div className="mx-auto max-w-4xl">
            <p className="mb-6 text-lg">
              Founded in 2023, WeChat began with a simple mission: to create a
              communication platform that seamlessly blends human interaction
              with AI capabilities.
            </p>

            <p className="mb-6 text-lg">
              Our team of engineers, designers, and AI specialists came together
              with a shared vision of transforming how groups collaborate. We
              recognized that while there were plenty of chat applications
              available, none effectively integrated AI assistants as true
              participants in group conversations.
            </p>

            <p className="mb-6 text-lg">
              Today, WeChat is used by thousands of teams and communities
              worldwide who rely on our platform to enhance their communication,
              streamline workflows, and tap into AI capabilities without
              interrupting their natural conversations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl">
            Our Values
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
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">People First</h3>
              <p className="text-muted-foreground">
                We believe technology should enhance human connections, not
                replace them. Our AI assistants are designed to support and
                amplify human collaboration.
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Privacy & Security</h3>
              <p className="text-muted-foreground">
                We are committed to protecting your data with enterprise-grade
                encryption and transparent privacy practices that put you in
                control.
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Continuous Innovation</h3>
              <p className="text-muted-foreground">
                We are constantly pushing the boundaries of what is possible in
                AI-assisted communication, with regular updates and new
                features.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl">
            How WeChat Works
          </h2>

          <div className="mx-auto max-w-4xl">
            <div className="mb-12 flex flex-col items-center md:flex-row">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white md:mb-0 md:mr-6">
                1
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold">Create Your Account</h3>
                <p className="text-lg text-muted-foreground">
                  Sign up for a free account to access all of WeChat&apos;s
                  features. Your account gives you the ability to create
                  projects and join existing group chats.
                </p>
              </div>
            </div>

            <div className="mb-12 flex flex-col items-center md:flex-row">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-2xl font-bold text-white md:mb-0 md:mr-6">
                2
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold">
                  Create a Project or Join an Existing One
                </h3>
                <p className="text-lg text-muted-foreground">
                  Set up a new project for your team, community, or interest
                  group. Customize it with the right AI capabilities for your
                  specific needs.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center md:flex-row">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-info text-2xl font-bold text-white md:mb-0 md:mr-6">
                3
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold">
                  Start Communicating Smarter
                </h3>
                <p className="text-lg text-muted-foreground">
                  Invite team members, add AI assistants (use @ai keyword to use
                  ai), and begin having more productive conversations with
                  intelligent, context-aware support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary/10 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
            Ready to Experience WeChat?
          </h2>

          <div className="mx-auto max-w-4xl rounded-lg border border-border bg-card p-8 shadow-lg">
            <div className="flex flex-col items-center justify-between space-y-6 text-center md:flex-row md:space-y-0 md:text-left">
              <div className="md:w-2/3">
                <h3 className="mb-3 text-xl font-bold">
                  Create an Account or Log In
                </h3>
                <p className="text-muted-foreground">
                  To create projects and start chatting with our AI assistants,
                  you will need to sign in to your WeChat account.
                </p>
              </div>
              <div className="flex flex-col space-y-3 md:flex-row md:space-x-4 md:space-y-0">
                <button
                  className="rounded-lg bg-primary px-6 py-3 text-white transition-colors hover:bg-opacity-90"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
                <button
                  className="hover:bg-primary/10 rounded-lg border border-primary bg-transparent px-6 py-3 text-primary transition-colors"
                  onClick={handleLogin}
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl">
            Meet The Founder
          </h2>

          <div className="mx-auto max-w-md">
            <div className="text-center">
              <div className="mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full shadow-lg">
                <img
                  src="/exp1.svg"
                  alt="Founder"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-2 text-2xl font-bold">Ajay Kr. Shakya</h3>
              <p className="mb-3 text-xl text-primary">Founder & CEO</p>
              <p className="mb-6 text-lg text-muted-foreground">
                Full-stack developer with expertise in AI and communication
                technologies. Passionate about creating tools that make
                collaboration more intelligent and intuitive for teams
                everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl">
            Get in Touch
          </h2>

          <div className="mx-auto max-w-4xl rounded-lg border border-border bg-card p-6 shadow-md">
            <div className="flex flex-col items-center">
              <div className="mb-8 text-center">
                <div className="mb-6 space-y-3">
                  <div className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>support@WeChat.com</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>

              <h3 className="mb-6 text-center text-xl font-bold">
                Connect With Me
              </h3>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://linkedin.com/in/azzayshakya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white transition-all hover:bg-blue-700 hover:shadow-lg"
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
                    className="h-5 w-5 transition-transform group-hover:scale-110"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="font-medium">LinkedIn</span>
                </a>

                <a
                  href="https://github.com/azzayshakya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full bg-gray-800 px-6 py-3 text-white transition-all hover:bg-gray-900 hover:shadow-lg"
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
                    className="h-5 w-5 transition-transform group-hover:scale-110"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 20.13V24"></path>
                  </svg>
                  <span className="font-medium">GitHub</span>
                </a>

                <a
                  href="https://instagram.com/azzayshakya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 px-6 py-3 text-white transition-all hover:from-purple-700 hover:via-pink-600 hover:to-orange-500 hover:shadow-lg"
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
                    className="h-5 w-5 transition-transform group-hover:scale-110"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="font-medium">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
