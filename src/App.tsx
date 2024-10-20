import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import { init } from "@telegram-apps/sdk-react";
// Pages
import Home from "./page/Home/Home";
import Add from "./page/Add/Add";
import Info from "./page/Info/Info";

// Style
import "./App/App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/info",
    element: <Info />,
  },
] as RouteObject[]);

const App: React.FC = () => {
  init();

  return <RouterProvider router={router} />;
};

export default App;
