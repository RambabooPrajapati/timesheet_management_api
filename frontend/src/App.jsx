import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ChangePassword from "./Pages/ChangePassword";
import EmailVerification from "./Pages/EmailVerification";
import ForgotPassword from "./Pages/ForgotPassword";
// import Schedule from "./Pages/Schedule";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Admindashboard />,
    },
    { 
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/change-password",
      element: <ChangePassword />,
    },
    {
      path: "/email-verification",
      element: <EmailVerification />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/schedule",
      element: <Schedule />,
    },
    {
      path: "/EmployeeProfile",
      element: <EmployeeProfile />,
    },
    {
      path: "/demo",
      element: <Employedetail />,
    },
    {
      path: "/Admindashboard",
      element: <Admindashboard />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
