import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Route,
  Outlet
} from "react-router-dom";
import "./CSS/index.css";
import Login from "./routes/Login"
import ErrorPage from "./error_page";
import Games from "./routes/Games"
import ScoutingPlatform from "./routes/ScoutingPlatform"
import Register from "./routes/Register"
import Navbar from "./components/Navbar";
import App from "./App";

const AppLayout = () => (
    <>
    <Navbar />
    <Outlet />
    </>

);
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App/>,
      },
      {
        path: "Login",
        element: <Login/>,
      },
      {
        path: "Register",
        element: <Register/>,
      },
      {
        path: "ScoutingPlatform",
        element: <ScoutingPlatform/>,
      },
      {
        path: "Games",
        element: <Games/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
