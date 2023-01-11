import "./assets/app.css";
import AboutMe from "./components/about-me/AboutMe";
import Home from "./components/home/Home";
import Navbar from "./components/nav-footer/Navbar";
import Projects from "./components/projects/Projects";
import From from "./components/contact/From";
import Footer from "./components/nav-footer/Footer";

function App() {

  return (
        <div className='App'>
          <Navbar />
          <main className="main">
            <Home />
            <AboutMe />
            <Projects />
            <From />
          </main>
          <Footer />
        </div>
  );
}

export default App;
