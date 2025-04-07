import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/App.css";
import ProjectsPageHeader from "./components/ProjectsPageHeader";
import CreateProjectModel from "./components/CreateProjectModel";
import useFetchProjects from "./hooks/useFetchProjects"; 
import Navbar from "@/components/Navbar";
import { initializeSocket } from "@/context/socket";

const ProjectsPageMain = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  const { fetchProjects, isFetching } = useFetchProjects();

  useEffect(() => {
    fetchProjects(undefined, {
      onSuccess: (projectsData) => {
        setProjects(projectsData);
      },
    });
  }, [fetchProjects]);
  useEffect(() => {
    const socket = initializeSocket();
  
    return () => {
      if (socket) socket.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background font-nunito">
      {/* Navigation */}
      <Navbar/>

      <ProjectsPageHeader />

      <section className="bg-background py-8">
        <div className="container px-4">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-bold">All Projects</h3>
            <CreateProjectModel
              onProjectCreated={() => {
                fetchProjects(undefined, {
                  onSuccess: (projectsData) => {
                    setProjects(projectsData);
                  },
                });
              }}
            />
          </div>

          {isFetching ? (
            <div className="flex justify-center py-10">
              <div className="loader"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Project Cards */}
              {projects.map((project) => (
                <div
                  key={project._id}
                  onClick={() => navigate(`/projects/${project._id}`)}
                  className="flex h-60 animate-fade-in cursor-pointer flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-md"
                >
                  <div className="mb-4">
                    <div className="bg-primary/20 flex h-12 w-12 items-center justify-center rounded-lg">
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
                  </div>

                  <h3 className="mb-2 text-xl font-bold">{project.name}</h3>

                  <div className="mb-1 mt-2 flex items-center text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="mr-2 h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span>{project.users.length} Collaborators</span>
                  </div>

                  <div className="mt-auto flex justify-between border-t border-border pt-4">
                    <div className="flex">
                      
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white">
                        <span className="text-xs">U</span>
                      </div>
                    </div>
                    <button className="hover:text-primary/80 text-primary transition-colors">
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error State
          {isError && (
            <div className="rounded-lg border border-red-300 bg-red-50 p-6 text-center">
              <h3 className="mb-2 text-xl font-bold text-red-700">
                Error Loading Projects
              </h3>
              <p className="text-red-600">
                {error?.message || "Failed to load projects. Please try again."}
              </p>
            </div>
          )} */}

          {/* Empty State */}
          {!isFetching  && projects.length === 0 && (
            <div className="rounded-lg border border-border bg-card p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-8 w-8 text-muted-foreground"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">No Projects Yet</h3>
              <p className="mb-6 text-muted-foreground">
                Create your first project to start collaborating
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPageMain;
