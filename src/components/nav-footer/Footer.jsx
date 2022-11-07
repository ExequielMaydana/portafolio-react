import React, { useContext } from "react";
import ThemeContext from "../utils/ThemeContext";
import "./styles/styleFooter.css";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; Exequiel Maydana <b>Developer.</b>
        </p>
      </div>

          <div className="squares1"></div>
          <div className="squares2"></div>
    </footer>
  );
};

export default Footer;
