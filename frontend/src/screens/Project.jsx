import  { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/user.context';
import { useNavigate } from 'react-router-dom';
import { createProjectApi, fetchProjectsApi } from '@/apis/apiServices';

const Projects = () => {
    const { user } = useContext(UserContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projectName, setProjectName] = useState('');
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    // Create new project
    
    const fetchProjects = async () => {
        try {
            const projectsData = await fetchProjectsApi();
            setProjects(projectsData);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const createProject = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await createProjectApi(projectName);
            fetchProjects();
            setIsModalOpen(false);
            setProjectName('');
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <div className="min-h-screen bg-background font-nunito">
            {/* Navigation */}
            <nav className="sticky top-0 z-10 bg-navy-blue shadow-md">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-primary">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <h1 className="text-xl md:text-2xl font-bold text-white">ChatHub</h1>
                    </div>
                    
                    <div className="hidden md:flex items-center space-x-6">
                        <a href="#" className="text-white hover:text-primary transition-colors">Home</a>
                        <a href="#" className="text-primary transition-colors">Projects</a>
                        <a href="#" className="text-white hover:text-primary transition-colors">Features</a>
                        <a href="#" className="text-white hover:text-primary transition-colors">About</a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                        <button className="hidden md:block px-4 py-2 rounded-lg bg-primary text-white hover:bg-opacity-90 transition-colors">
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

            {/* Projects Header Section */}
            <section className="bg-navy-blue text-white py-8 md:py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Your Projects</h2>
                        <p className="text-lg mb-6 text-muted">Manage and organize your chat projects in one place.</p>
                    </div>
                </div>
            </section>

            {/* Projects List Section */}
            <section className="py-8 bg-background">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold">All Projects</h3>
                        <button 
                            onClick={() => setIsModalOpen(true)} 
                            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors flex items-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                            </svg>
                            New Project
                        </button>
                    </div>
                    
                    {isLoading ? (
                        <div className="flex justify-center py-10">
                            <div className="animate-pulse-soft">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-primary">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* New Project Card */}
                            <div 
                                onClick={() => setIsModalOpen(true)}
                                className="bg-card border border-border rounded-lg p-6 h-60 flex flex-col justify-center items-center cursor-pointer hover:border-primary hover:shadow-md transition-all"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-primary">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold mb-1">Create New Project</h3>
                                <p className="text-muted-foreground text-center">Start a new collaboration space</p>
                            </div>
                            
                            {/* Project Cards */}
                            {projects.map((project) => (
                                <div 
                                    key={project._id}
                                    onClick={() => navigate('/project', { state: { project } })}
                                    className="bg-card border border-border rounded-lg p-6 h-60 flex flex-col cursor-pointer hover:border-primary hover:shadow-md transition-all animate-fade-in"
                                >
                                    <div className="mb-4">
                                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-primary">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                            </svg>
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                                    
                                    <div className="mt-2 text-muted-foreground flex items-center mb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                        <span>{project.users.length} Collaborators</span>
                                    </div>
                                    
                                    <div className="mt-auto pt-4 border-t border-border flex justify-between">
                                        <div className="flex">
                                            {/* This would show user avatars - limited to 3 with a +X more */}
                                            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white">
                                                <span className="text-xs">U</span>
                                            </div>
                                        </div>
                                        <button className="text-primary hover:text-primary/80 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    
                    {/* Empty State */}
                    {!isLoading && projects.length === 0 && (
                        <div className="bg-card border border-border rounded-lg p-8 text-center">
                            <div className="w-16 h-16 bg-muted rounded-full mx-auto flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-muted-foreground">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">No Projects Yet</h3>
                            <p className="text-muted-foreground mb-6">Create your first project to start collaborating</p>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors"
                            >
                                Create Project
                            </button>
                        </div>
                    )}
                </div>
            </section>
            
            {/* Create Project Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-card p-6 rounded-lg shadow-lg w-full max-w-md animate-fade-in-up">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Create New Project</h2>
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="text-muted-foreground hover:text-foreground"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        
                        <form onSubmit={createProject}>
                            <div className="mb-4">
                                <label htmlFor="projectName" className="block text-sm font-medium text-foreground mb-1">
                                    Project Name
                                </label>
                                <input
                                    id="projectName"
                                    type="text"
                                    value={projectName}
                                    onChange={(e) => setProjectName(e.target.value)}
                                    className="w-full p-2 border border-input rounded-lg focus:ring focus:ring-primary/20 gcl-form-control"
                                    placeholder="Enter project name"
                                    required
                                />
                            </div>
                            
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors"
                                >
                                    Create Project
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            
           
        </div>
    );
};

export default Projects;