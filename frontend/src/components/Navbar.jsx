import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '@/context/user.context';
import { logoutApi } from '@/apis/apiServices';
import { toast } from 'react-toastify';
export default function Navbar() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      const res = await logoutApi();
      if (res.status==true) {
        toast.success(res.message);
        localStorage.removeItem("wechatUser");
        localStorage.removeItem("wechatUserToken");
        setUser(null);
        navigate("/login");
      } else {
        toast.error(res.message || "Logout failed");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong during logout.");
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="sticky top-0 z-10 bg-navy-blue shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate("/home")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" className="w-8 h-8 text-primary">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <h1 className="text-xl md:text-2xl font-bold text-white">ChatHub</h1>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="/home" className="text-white hover:text-primary transition-colors">Home</a>
          <a href="/home" className="text-white hover:text-primary transition-colors">About</a>
          <a href="/projects" className="text-white hover:text-primary transition-colors">Projects</a>
        </div>

        <div className="flex items-center space-x-3">
          {!user ? (
            <>
              <button className="hidden md:block px-4 py-2 rounded-lg bg-primary text-white hover:bg-opacity-90 transition-colors" onClick={() => navigate("/create-account")}>
                Sign Up
              </button>
              <button className="hidden md:block px-4 py-2 rounded-lg text-white border hover:bg-opacity-90 transition-colors" onClick={() => navigate("/login")}>
                Log In
              </button>
            </>
          ) : (
            <button className="hidden md:block px-4 py-2 rounded-lg text-white bg-red-500 hover:bg-red-600 transition-colors" onClick={handleLogout}>
              Log Out
            </button>
          )}
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}