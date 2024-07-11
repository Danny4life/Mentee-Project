import Search from "./components/Search";
import NavBar from "./components/navbar";
import Body from "./components/Body";
import FindHeader from "./components/findJob/findHeader";
import FindBody from "./components/findJob/findBody";

function App() {
  return (
    <div>
      <NavBar />
      <Search />
      <Body />
      <FindHeader />
      <FindBody />
    </div>
  );
}

export default App;

