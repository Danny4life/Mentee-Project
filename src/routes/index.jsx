import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GeneralLayout from "../components/layouts/GeneralLayout";
import CompanyLayout from "../components/layouts/CompanyLayout";

const LandingPage = lazy(() => import("../Pages/LandingPage"));
const ForgotPassword = lazy(() =>
  import("../Pages/Authentication/ForgotPasswordPage")
);
const Login = lazy(() => import("../Pages/Authentication/LoginPage"));
const Signup = lazy(() => import("../Pages/Authentication/SignupPage"));
const ResetPassword = lazy(() =>
  import("../Pages/Authentication/ResetPasswordPage")
);
const FindJobPage = lazy(() => import("../Pages/FindJobPage"));
const CompanyHomePage = lazy(() => import("../Pages/Company/HomePage"));
const PostNewJob = lazy(() => import("../Pages/PostNewJob"));

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <GeneralLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LandingPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "company",
    element: <CompanyLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <CompanyHomePage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "register",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Signup />
      </Suspense>
    ),
  },
  {
    path: "login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "forgot-password",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ForgotPassword />
      </Suspense>
    ),
  },
  {
    path: "reset-password",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ResetPassword />
      </Suspense>
    ),
  },
  {
    path: "find-jobs",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <FindJobPage />
      </Suspense>
    ),
  },
  {
    path: "post-job",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <PostNewJob />
      </Suspense>
    ),
  },
]);

export default Routers;
