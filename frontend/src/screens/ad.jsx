const Home = () => {
    // Simple animation observer setup using React's useEffect
    React.useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      }, { threshold: 0.1 });
      
      const animatedElements = document.querySelectorAll('[data-animate]');
      animatedElements.forEach(el => observer.observe(el));
      
      return () => observer.disconnect();
    }, []);
  
    return (
      <div className="min-h-screen bg-background font-nunito">
        {/* Navigation Bar - Slide in from top animation */}
        <nav className="sticky top-0 z-10 bg-navy-blue shadow-md animate-fade-in-down">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-primary animate-bounce-light">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <h1 className="text-xl md:text-2xl font-bold text-white">ChatHub</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-white hover:text-primary transition-colors">Home</a>
              <a href="#" className="text-white hover:text-primary transition-colors">Features</a>
              <a href="#" className="text-white hover:text-primary transition-colors">Pricing</a>
              <a href="#" className="text-white hover:text-primary transition-colors">About</a>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="hidden md:block px-4 py-2 rounded-lg bg-primary text-white hover:bg-opacity-90 transition-colors hover:scale-105 transform duration-200">
                Sign Up
              </button>
              <button className="md:hidden text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
  
        {/* Hero Section - Fade in animations */}
        <section className="bg-navy-blue text-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in-up-1">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Chat Smarter with AI-Powered Groups</h2>
                <p className="text-lg md:text-xl mb-6 text-muted">Connect with friends, colleagues, and AI assistants in one seamless platform.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-6 py-3 rounded-lg bg-primary text-white hover:bg-opacity-90 transition-colors transform hover:scale-105 duration-200">
                    Get Started
                  </button>
                  <button className="px-6 py-3 rounded-lg bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 animate-fade-in-up-2">
                <img src="https://www.computer-talk.com/images/default-source/blogs/ai-chatbot-customer-service.jpg?sfvrsn=84c85ff6_1" alt="Chat Platform Preview" className="rounded-lg shadow-lg max-w-full h-auto" />
              </div>
            </div>
          </div>
        </section>
  
        {/* Chat Interface - Fade in when scrolling into view */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" data-animate="true">Experience Our Chat Platform</h2>
            
            <div className="bg-card rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto border border-border" data-animate="true">
              {/* Chat Header */}
              <div className="bg-navy-blue text-white p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center animate-pulse-soft">
                    <span className="font-bold">T</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Tech Enthusiasts</h3>
                    <p className="text-sm text-muted-foreground">5 members, 1 AI assistant</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-white hover:bg-opacity-10 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Chat Messages - Staggered slide-in animations */}
              <div className="bg-white h-80 overflow-y-auto p-4">
                {/* User Message */}
                <div className="mb-4 flex animate-slide-in-left">
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
                <div className="mb-4 flex animate-slide-in-right">
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
                <div className="mb-4 flex animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
                  <div className="bg-warning-foreground rounded-full w-8 h-8 flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-white font-bold text-sm">J</span>
                  </div>
                  <div className="bg-muted rounded-lg rounded-tl-none p-3 max-w-xs md:max-w-md">
                    <p className="text-sm font-bold">Jake</p>
                    <p>I've been playing with it for a couple days now. The performance improvements are really noticeable!</p>
                    <p className="text-xs text-muted-foreground mt-1">10:35 AM</p>
                  </div>
                </div>
              </div>
              
              {/* Chat Input */}
              <div className="p-4 border-t border-border">
                <div className="flex space-x-2">
                  <button className="p-2 text-muted-foreground hover:text-primary rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  </button>
                  <input 
                    type="text" 
                    placeholder="Type your message..." 
                    className="gcl-form-control flex-1 py-2 px-4 bg-input rounded-lg focus:ring focus:ring-primary/20"
                  />
                  <button className="p-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors transform hover:scale-105 duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Features Section - Staggered fade-in for cards */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" data-animate="true">Why Choose ChatHub?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="bg-card p-6 rounded-lg shadow-md border border-border transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-animate="true">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Smart Group Chats</h3>
                <p className="text-muted-foreground">Create topic-focused group chats with friends, colleagues, and AI assistants all in one place.</p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-card p-6 rounded-lg shadow-md border border-border transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-animate="true">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-secondary">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">AI-Powered Assistance</h3>
                <p className="text-muted-foreground">Get instant answers, suggestions, and help from our advanced AI that learns from your group's interactions.</p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-card p-6 rounded-lg shadow-md border border-border transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-animate="true">
                <div className="w-12 h-12 bg-info/20 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-info-foreground">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Secure Conversations</h3>
                <p className="text-muted-foreground">End-to-end encryption ensures your conversations remain private and secure at all times.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section - Pulse animation for focus */}
        <section className="py-12 bg-primary/10" data-animate="true">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Communication?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto text-muted-foreground">Join thousands of users who are already experiencing the future of group chat with AI-powered assistance.</p>
            <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors animate-pulse-soft transform hover:scale-105 duration-200">
              Get Started Free
            </button>
          </div>
        </section>
        
        {/* Footer - Fade in */}
        <footer className="bg-navy-blue text-white py-8 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <h3 className="text-lg font-bold">ChatHub</h3>
                </div>
                <p className="text-sm text-muted">Revolutionizing the way we communicate with AI-enhanced group chats.</p>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Product</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-