import React from "react";
import "./styles/styleHome.css";
import { motion } from "framer-motion";

const Home = () => {
  const boxVariant = {
    visible: { opacity: 1, transition: { duration: 1 }, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <div id="home">
      <article className="home">
        <div className="div-circle"></div>
        <div className="div-circle1"></div>
        <div className="div-circle2"></div>
        <div className="div-cuadrado"></div>
        <div className="div-cuadrado1"></div>

        <section className="name-profession">
          <h1 className="title">
            Soy Exequiel Maydana, un <br /> profesional
            <div className="rotate-words">
              <span className="span1">front end.</span>
              <span className="span2">back end.</span>
              <span className="span3">web developer.</span>
            </div>
          </h1>

          <motion.figure
            variants={boxVariant}
            initial="hidden"
            animate="visible"
            className="image"
          >
            <div className="avatar"></div>
          </motion.figure>
        </section>

        <section className="redes">
          <ul className="container-icon-redes">
            <li className="list__item list__item-instagram">
              <a
                href="https://www.instagram.com/exe_m666/"
                target="_blank"
                className="list__link"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li className="list__item list__item-twitter">
              <a
                href="https://twitter.com/ExeBikerr"
                target="_blank"
                className="list__link"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li className="list__item list__item-linkedin">
              <a
                href="https://www.linkedin.com/in/hernan-exequiel-maydana-913a50218/"
                target="_blank"
                className="list__link"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li className="list__item list__item-github">
              <a
                href="https://github.com/ExequielMaydana?tab=repositories"
                target="_blank"
                className="list__link"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
        </section>
        <div className="squares3"></div>
        <div className="squares4"></div>
      </article>
    </div>
  );
};

export default Home;
