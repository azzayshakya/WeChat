import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "@/screens/Home";
import Login from "@/screens/Login";
import CreateAccount from "@/screens/CreateAccount";
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
      path: "/login",
      element: <Login />,
    },
    // {
    //   path: "*",
    //   element: <NotFoundPage />,
    // },
  ]
);

export default router;
