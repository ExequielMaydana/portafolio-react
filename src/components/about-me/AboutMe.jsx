import React, { useContext, useEffect } from "react";
import "./styles/styleAbout.css";
import cv from "../../assets/cv-exequiel-maydana-frontend.pdf";
import ThemeContext from "../utils/ThemeContext";
import Skills from "../skills/Skills";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const AboutMe = () => {
  const { theme } = useContext(ThemeContext);

  //?useAnimation
  /* Hago uso del gancho useAnimation de framer-motion para activar la animacion
    del componente cuando entre a la ventana grafica.
  */
  //?useInView
  /*
  este es un gancho que nos permite rastrear cuando un componente esta visible
  en la ventana grafica.
 */

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div id="sobreMi">
      <motion.article
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className="about-skill"
      >
        <section
          className={`container-about ${
            theme === "bg-light" ? "container-about-light" : "container-about"
          }`}
        >
          <div className="about-circle"></div>
          <div className="about-circle1"></div>
          <div className="about-circle2"></div>
          <div className="about-cuadrado"></div>
          <div className="about-cuadrado1"></div>

          <div
            className={`container-textAbout ${
              theme === "bg-light"
                ? "container-textAbout-light"
                : "container-textAbout"
            }`}
          >
            <div className="text-title">
              <h2
                className={`title-about ${
                  theme === "bg-light" ? "title-about-light" : "title-about"
                }`}
              >
                Sobre mi
              </h2>
            </div>
            <div
              className={`text-history ${
                theme === "bg-light" ? "text-history-light" : "text-history"
              }`}
            >
              <p>
                Hola, mi nombre es Exequiel, tengo amplia experiencia con HTML,
                CSS, JavaScript, y React. Tambien tengo conocimientos
                intermedios en Node.js con Express y PostgreSQL. Tengo
                conocimientos basicos de Python.
              </p>
              <p>
                Soy una persona responsable y se aprovechar muy bien el tiempo,
                con atencion al detalle, se trabajar en equipo y estoy dispuesto
                a aprender de mis compañeros y superiores todo lo que sea
                necesario para prestar un mejor servicio.
              </p>

              <p>
                Empece con la programación en el año 2021, en el curso de
                Argentina Programa, un curso de programación web con Java y SQL,
                cuando termine dicho curso me puse a profundizar todo lo que
                había visto por mi cuenta como autodidacta, luego en abril del
                año 2022 empece a cursar el bootcamp de Academlo, en el cual
                aprendí las tecnologías necesarias para ser todo un
                Desarrollador Web Full-Stack. A lo largo de mi formación como
                desarrollador he enfatizado la importancia del código escalable
                y bien documentado.
              </p>
            </div>
            <div className="container-btn-cv">
              <a
                download="cv-maydana-FrontendDeveloper"
                href={cv}
                className={`btn ${theme === "bg-light" ? "btn-light" : "btn"}`}
              >
                Descargar cv
              </a>
            </div>
          </div>
          <div className="squares1"></div>
          <div className="squares2"></div>
          <div className="squares3"></div>
          <div className="squares4"></div>
        </section>

        <section className="container-skill">
          <Skills />
        </section>
      </motion.article>
    </div>
  );
};

export default AboutMe;
