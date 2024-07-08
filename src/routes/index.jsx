import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import GeneralLayout from "../components/layouts/GeneralLayout";

const LandingPage = lazy(() => import("../page/LandingPage"));

let Routers = createBrowserRouter([
  {
    path: "/",
    Component: GeneralLayout,
    children: [
      {
        path: "/",
        Component: LandingPage,
        exact: true,
      },
    ],
  },
]);

export default Routers;
