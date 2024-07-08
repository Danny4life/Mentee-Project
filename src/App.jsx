import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import "./App.css";
import Routers from "./routes";

export default function App() {
  return (
    <RouterProvider router={Routers} fallbackElement={<p>Loading...</p>} />
  );
}
