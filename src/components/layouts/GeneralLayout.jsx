import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../reusables/Header";
import Footer from "../reusables/Footer";

const Layout = () => (
  <div className="relative flex flex-col w-full min-h-screen overflow-y-auto .roboto-regular">
    <Header />
    <main className="h-full overflow-y-auto w-full">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
