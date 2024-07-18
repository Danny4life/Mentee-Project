import React, { lazy } from "react";


const Search = lazy(() => import("../../components/Search"));
const Body = lazy(() => import("../../components/Body"));

const HomePage = () => {
  return (
    <div className="">
      <Search />
      <Body />
    </div>
  );
};

export default HomePage;
