import React from "react";
import FindHeader from "../findJob/findHeader";

const GeneralLayout = ({ children }) => (
  <div className="relative flex flex-col w-full min-h-screen overflow-y-auto .roboto-regular">
    <FindHeader />
    <main className="h-full overflow-y-auto w-full">{children}</main>
  </div>
);

export default GeneralLayout;
