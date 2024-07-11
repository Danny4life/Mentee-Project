import Search from "./components/Search";
import NavBar from "./components/navbar";
import Hero from "./components/Hero";
import FindHeader from "./components/findJob/findHeader";
import FindBody from "./components/findJob/findBody";

function App() {
  return (
    <div>
      <NavBar />
      <Search />
      <Hero />
      <FindHeader />
      <FindBody />
    </div>
  );
}

export default App;

