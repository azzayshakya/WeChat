import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "@/screens/Home";
import Login from "@/screens/Login";
import CreateAccount from "@/screens/CreateAccount";
import UserProjectsScreen from "@/screens/UserProjectsScreen";
import ChatPageMain from "@/features/chat/ChatPageMain";
import AboutUs from "@/screens/AboutUs";
// import Practicing from "@/dummy-practice/Practicing";
// import PracticeProjectPage from "@/dummy-practice/PracticeProjectPage";
// import { ErrorPage } from "../pages/common/ErrorPage";
// import { NotFoundPage } from "../pages/common/NotFoundPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navigate to="/home" />,
      // errorElement: <ErrorPage />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/create-account",
      element: <CreateAccount />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/projects",
      element: <UserProjectsScreen />,
    },
    {
      path: "/projects/:projectId",
      element: <ChatPageMain />,
    }
    // {
    //   path: "/practicing",
    //   element: <Practicing />,
    // },
    // {
    //   path: "/practicingTwo",
    //   element: <PracticeProjectPage />,
    // },
    
    
    
    // {
    //   path: "*",
    //   element: <NotFoundPage />,
    // },
  ]
);

export default router;
