import "./assets/app.css";
import { useState  } from "react";
import AboutMe from "./components/about-me/AboutMe";
import Home from "./components/home/Home";
import Navbar from "./components/nav-footer/Navbar";
import ThemeContext from "./components/utils/ThemeContext";
import Projects from "./components/projects/Projects";
import From from "./components/contact/From";
import Footer from "./components/nav-footer/Footer";

function App() {
  const [theme, updateTheme] = useState("bg-dark");


  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
        <div className={`App ${theme}`}>
          <Navbar />
          <main className="main">
            <Home />
            <AboutMe />
            <Projects />
            <From />
          </main>
          <Footer />
        </div>
    </ThemeContext.Provider>
  );
}

export default App;
