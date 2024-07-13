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

function App() {
  return (
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
  );
}

export default App;

