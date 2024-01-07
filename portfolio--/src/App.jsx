import Nav from "./Components/Nav";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Stack from "./Components/Stack";
import Project from "./Components/Project";



const App = () => {
  return (
    <>
      |
      <div className="bg-slate-900">
        <Nav/>
        <Banner/>
        <About/>
        <Stack/>
        <Project/>

        
      </div>
    </>
  );
}

export default App;
