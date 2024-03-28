import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="bg-workBG bg-no-repeat bg-cover w-full ">
      <Home></Home>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
