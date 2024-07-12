import { useState } from "react";
import Login from "./component/login.jsx";
import Signup from "./component/signup.jsx";
function App() {
  const [currentForm, setCurrentForm] = useState("login")
  const toggleForm = (formName)=>{
    setCurrentForm(formName);
  }
  return (
    <>
    {
        currentForm === "login"?<Login onFormSwitch={toggleForm} />:<Signup onFormSwitch={toggleForm}/>
    }
    
    </>
  );
}

export default App;
