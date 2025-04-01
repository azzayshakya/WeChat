import { useContext, useEffect } from "react";
import { UserContext } from "@/context/user.context";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("Home component re-rendered. User:", user);

    if (!user) {
      // navigate('/login');
    }
  }, [user]);

  if (!user) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="mb-4 text-2xl font-bold">Welcome to WeChat</h1>
        <p className="mb-4">
          Please log in to access your messages and contacts.
        </p>
        <button
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">
        Welcome back, {user?.email || "User"}!
      </h1>
      <div className="rounded bg-gray-100 p-4">
        <h2 className="mb-2 text-xl">Your Recent Chats</h2>
        {/* Display recent chats here */}
        <div className="text-gray-500">No recent chats found.</div>
      </div>
    </div>
  );
}
