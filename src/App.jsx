

import "./App.css";
import Navbar from './components/Navbar/navbar'
import About from './components/About/about'
import Hero  from  './components/Hero/hero'
import Service from './components/Service/service'
import Work  from './components/Work/work'
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
