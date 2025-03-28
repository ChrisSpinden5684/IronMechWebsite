import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import "./index.css";
import Home from "./routes/Home"
import ErrorPage from "./error_page";
import Games from "./routes/Games"
import ScoutingPlatform from "./routes/ScoutingPlatform"
import Root from "./routes/root";


const router = createBrowserRouter([
  {
    path: "/",
    element:(
    <Root/>
    
  ),
    errorElement: <ErrorPage />,
  },
  {
    path: "Home",
    element: <Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "ScoutingPlatform",
    element: <ScoutingPlatform/>,
    
  },
  {
    path: "Games",
    element: <Games/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
