import "./App.css";
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import AddDevice from "./pages/AddDevice/AddDevice";
import NoAuth from "./pages/NoAuth/NoAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <AddDevice />,
  },
  {
    path: "*",
    element: <NoAuth />,
  },
] as RouteObject[]);

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  });

  return <RouterProvider router={router} />;
}

export default App;
