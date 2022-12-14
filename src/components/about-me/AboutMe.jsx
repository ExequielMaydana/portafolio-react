import React, { useEffect } from "react";
import "./styles/styleAbout.css";
import cv from "../../assets/cv-maydana-hernan-exequiel.pdf";
import Skills from "../skills/Skills";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const AboutMe = () => {
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
        <section className="container-about">
          <div className="about-circle"></div>
          <div className="about-circle1"></div>
          <div className="about-circle2"></div>
          <div className="about-cuadrado"></div>
          <div className="about-cuadrado1"></div>

          <div className="container-textAbout">
            <div className="text-title">
              <h2 className="title-about">Sobre mi</h2>
            </div>
            <div className="text-history">
              <p>
                Hola, mi nombre es Exequiel, tengo amplia experiencia con HTML,
                CSS, JavaScript, y React. Tambien tengo conocimientos
                intermedios en Node.js con Express y PostgreSQL. Tengo
                conocimientos basicos de Python.
              </p>
              <p>
                Soy una persona responsable y se aprovechar muy bien el tiempo,
                con atencion al detalle, se trabajar en equipo y estoy dispuesto
                a aprender de mis compa??eros y superiores todo lo que sea
                necesario para prestar un mejor servicio.
              </p>

              <p>
                Empece con la programaci??n en el a??o 2021, en el curso de
                Argentina Programa, un curso de programaci??n web con Java y SQL,
                cuando termine dicho curso me puse a profundizar todo lo que
                hab??a visto por mi cuenta como autodidacta, luego en abril del
                a??o 2022 empece a cursar el bootcamp de Academlo, en el cual
                aprend?? las tecnolog??as necesarias para ser todo un
                Desarrollador Web Full-Stack. A lo largo de mi formaci??n como
                desarrollador he enfatizado la importancia del c??digo escalable
                y bien documentado.
              </p>
            </div>
            <div className="container-btn-cv">
              <a
                download="cv-maydana-hernan-exequiel"
                href={cv}
                className="btn"
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
