import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Forget from "./Pages/ForgottenPassword.jsx"
import ModalOne from "./Pages/ModalPageOne.jsx"
import ModalTwo from "./Pages/ModalPagetwo.jsx"
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  }, {
    path: "forget",
    element: <Forget/>
  },
  {
    path: "modal",
    element: <ModalOne/>
  },
  {
    path: "modaltwo",
    element: <ModalTwo/>
  },
 
]);


const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
