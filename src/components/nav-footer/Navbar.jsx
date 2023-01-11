import React, { useRef } from "react";
import "./styles/styleNavbar.css";
import logoNav from "../../assets/logos/logo-navbar.png";

const Navbar = () => {
  const navbarOpen = useRef();
  const lineOneActive = useRef();
  const lineTwoActive = useRef();
  const lineThreeActive = useRef();

  const openMenu = () => {
    navbarOpen.current?.classList.toggle("openMenu");
    lineOneActive.current?.classList.toggle("activeLine1");
    lineTwoActive.current?.classList.toggle("activeLine2");
    lineThreeActive.current?.classList.toggle("activeLine3");
  };

  const closeMenu = () => {
    navbarOpen.current?.classList.toggle("openMenu");
    lineOneActive.current?.classList.toggle("activeLine1");
    lineTwoActive.current?.classList.toggle("activeLine2");
    lineThreeActive.current?.classList.toggle("activeLine3");
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logoNav} alt="logo" className="image" />
      </div>

      <div className="menu-burger" onClick={openMenu}>
        <span ref={lineOneActive}></span>
        <span ref={lineTwoActive}></span>
        <span ref={lineThreeActive}></span>
      </div>

      <nav ref={navbarOpen} className="nav">
        <ul className="nav-menu">
          <li className="nav-links">
            <i className="bx bx-home icon"></i>
            <a onClick={closeMenu} href="#home" className="link">
              Inicio
            </a>
          </li>
          <li className="nav-links">
            <i className="bx bx-user icon"></i>
            <a onClick={closeMenu} href="#sobreMi">
              Sobre mi
            </a>
          </li>
          <li className="nav-links">
            <i className="bx bx-code-alt icon"></i>
            <a onClick={closeMenu} href="#sobreMi">
              Habilidades
            </a>
          </li>
          <li className="nav-links">
            <i className="bx bx-folder icon"></i>
            <a onClick={closeMenu} href="#projects">
              Proyectos
            </a>
          </li>
          <li className="nav-links">
            <i className="bx bx-chat icon"></i>
            <a onClick={closeMenu} href="#contactMe">
              Contacto
            </a>
          </li>
        </ul>
        <footer className="nav-footer">
          <div className="nav-footer-text">
            <span className="footer-separation"></span>
            <p>
              &copy; Exequiel Maydana <b>Developer.</b>
            </p>
            <span>Todos los derechos reservados.</span>
          </div>
        </footer>
      </nav>
    </header>
  );
};

export default Navbar;
