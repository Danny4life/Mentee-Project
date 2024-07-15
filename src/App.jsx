<<<<<<< HEAD
import { useState } from "react";
import Login from "./component/login.jsx";
import Signup from "./component/signup.jsx";
=======
import Search from "./components/Search";
import NavBar from "./components/navbar";
<<<<<<< HEAD
import Body from "./components/Body";
import FindHeader from "./components/findJob/findHeader";
import FindBody from "./components/findJob/findBody";
=======
import Forgotpass from "./components/forgotpassword";
import Modal from "./components/modal"
import Modaltwo from "./components/modaltwo"
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import {Forget} from "./Pages/forget"; // Ensure correct import



>>>>>>> kingsley

>>>>>>> 46c95e312480a8f3a29b93bb3a22235c706db3a0
function App() {
  const [currentForm, setCurrentForm] = useState("login")
  const toggleForm = (formName)=>{
    setCurrentForm(formName);
  }
  return (
<<<<<<< HEAD
    <>
    {
        currentForm === "login"?<Login onFormSwitch={toggleForm} />:<Signup onFormSwitch={toggleForm}/>
    }
    
    </>
=======
    <div>
          <NavBar />
          <Search />
          <Body />
          <FindHeader />
          <FindBody />
          <Forgotpass />
          <Modal />
          <Modaltwo />
    </div>
>>>>>>> 46c95e312480a8f3a29b93bb3a22235c706db3a0
  );
}

export default App;

