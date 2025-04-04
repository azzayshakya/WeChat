export default function Practicing() {
  return (
    <div>
      <div className="bg-navy-blue py-12 text-white md:py-20">
        <section className="border bg-navyblue py-12 text-white md:py-20">
          <div className="leftHome container mx-auto px-4">
            <div className="flex flex-col items-center md:flex-row">
              <div className="mb:mb-0 mb-8 md:w-1/2">
                {/* <div> */}
                <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                  Chat Smarter with AI-Powered Groups
                </h2>
                <p className="mb-6 text-lg text-muted md:text-xl">
                  Connect with friends, colleagues, and AI assistants in one
                  seamless platform.
                </p>
                {/* </div> */}
                <div className="flex flex-col gap-4 sm:flex-row">
                  <button className="rounded-lg bg-primary px-6 py-3 text-white transition-colors hover:bg-opacity-90">
                    Get Started
                  </button>
                  <button className="rounded-lg border border-white bg-transparent px-6 py-3 text-white transition-colors hover:bg-white hover:bg-opacity-10">
                    learn more
                  </button>
                </div>
              </div>

              <div className="rightHome md:w-1/2">
                <img
                  src="https://www.computer-talk.com/images/default-source/blogs/ai-chatbot-customer-service.jpg?sfvrsn=84c85ff6_1"
                  alt="Chat Platform Preview"
                  className="h-auto max-w-full rounded-lg shadow-lg"
                />
              </div>
              {/* </div> */}
            </div>
          </div>
        </section>
        <section className="rounded-lg border border-secondary bg-background py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-10 text-center text-2xl text-black md:text-3xl lg:text-4xl">
              Experience Our Chat Platform
            </h2>
            {/* chat inter face */}
            <div className="mx-auto max-w-4xl items-center overflow-hidden rounded-lg border bg-card shadow-lg">
              {/* header */}
              <div className="flex items-center justify-between bg-navyblue p-4 text-white">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-light-green">
                    <span className="font-bold">T</span>
                  </div>
                  <div>
                    <p className="font-bold">Tech Enthusiasts</p>
                    <span className="text-sm text-muted-foreground">
                      5 members, 1 AI assistant
                    </span>
                  </div>
                </div>
                <div className="space-x-2">
                  <button className="rounded-full p-2">
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
               {/* bottom of header */}
              <div className="border border-primary h-80 bg-white overflow-y-auto p-4">
                {/* user message */}
                {/* user photo */}
                <div className="flex mb-4 ">
                <div className="bg-secondary h-8 w-8 rounded-full flex items-center justify-center mr-2 flex-shrink-0 ">
                   <span className="font-bold text-sm">T</span>

                </div>
                <div className="text-black bg-  rounded-lg rounded-tl-none p-3 max-w-xs md:max-w-md">
                <p className="font-bold text-xs">Sarah</p>
                  <p>Hey everyone! Has anyone tried the new React 19 features yet?</p>
                  <p className="text-muted-foreground text-sm mt-1">10:32 AM</p>
                  
                </div>
                </div>

                {/* my msg */}
                <div className="flex mb-4 border border-secondary">
                <div className="bg-secondary h-8 w-8 rounded-full flex items-center justify-center mr-2 flex-shrink-0 ">
                   <span className="font-bold text-sm">T</span>

                </div>
                <div className="text-black bg-muted p-3 rounded-lg">
                <p className="font-bold text-xs">Sarah</p>
                  <p>Hey everyone! Has anyone tried the new React 19 features yet?</p>
                  <p className="text-muted-foreground text-sm mt-1">10:32 AM</p>
                  
                </div>
                </div>

                <div className="flex mb-4 border border-secondary">
                <div className="bg-secondary h-8 w-8 rounded-full flex items-center justify-center mr-2 flex-shrink-0 ">
                   <span className="font-bold text-sm">T</span>

                </div>
                <div className="text-black bg-muted p-3 rounded-lg">
                <p className="font-bold text-xs">Sarah</p>
                  <p>Hey everyone! Has anyone tried the new React 19 features yet?</p>
                  <p className="text-muted-foreground text-sm mt-1">10:32 AM</p>
                  
                </div>
                </div>

                <div className="flex mb-4 border border-secondary">
                <div className="bg-secondary h-8 w-8 rounded-full flex items-center justify-center mr-2 flex-shrink-0 ">
                   <span className="font-bold text-sm">T</span>

                </div>
                <div className="text-black bg-muted p-3 rounded-lg">
                <p className="font-bold text-xs">Sarah</p>
                  <p>Hey everyone! Has anyone tried the new React 19 features yet?</p>
                  <p className="text-muted-foreground text-sm mt-1">10:32 AM</p>
                  
                </div>
                </div>

            </div>
            </div>
           
            
          </div>
        </section>
      </div>
      <div className="min-h-screen bg-secondary"></div>
    </div>
  );
}
