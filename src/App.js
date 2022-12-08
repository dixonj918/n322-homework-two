import "./App.css";
import BrandExample from "./components/nav/header";
import AlignmentExample from "./components/nav/nav";
import Hero from "./components/hero/hero";
import GuitarGuide from "./components/guitarGuide/guitarGuide";
import About from "./components/about/about";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <BrandExample></BrandExample>
      <AlignmentExample></AlignmentExample>
      <Hero></Hero>
      <GuitarGuide></GuitarGuide>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
