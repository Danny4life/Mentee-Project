import React from "react";

import Forgotpass from "../components/forgotpassword";
import Modal from "../components/modal";
import Modaltwo from "../components/modaltwo";

const AuthenticationPage = () => {
  return (
    <div className="">
      <div>
        <Forgotpass />
        <Modal />
        <Modaltwo />
      </div>
    </div>
  );
};

export default AuthenticationPage;
