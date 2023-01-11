import React, { useEffect } from "react";
import "./style/projectStyle.css";
import imageRick from "../../assets/imgs/projects-imgs/Riky-app.jpg";
import portadaRick from "../../assets/imgs/projects-imgs/portada-card-ricky.jpg";
import portadaPoke from "../../assets/imgs/projects-imgs/portada-card-poke.jpg";
import portadaWeather from "../../assets/imgs/projects-imgs/portada-card-wheater.jpg";
import imageWeather from "../../assets/imgs/projects-imgs/App-clima.jpg";
import imagePoke from "../../assets/imgs/projects-imgs/app-poke.jpg";
import portadaCommerce from "../../assets/imgs/projects-imgs/partada-e-commer.jpg";
import imageCommerce from "../../assets/imgs/projects-imgs/e-commerce.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const Projects = () => {
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
    <div id="projects">
      <motion.section
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className="container-projects"
      >
        <div className="container-projects-title">
          <h2 className="projects-title">Proyectos</h2>
        </div>

        <div className="container-card-projects">
          <article className="card-project">
            <figure className="container-img-project">
              <img src={portadaRick} alt="" className="project-img-front" />
              <img src={imageRick} alt="" className="project-img-back" />
            </figure>
            <p className="card-text">Tecnologias usadas</p>
            <div className="card-tecnologias">
              <i className="fa-brands fa-html5 icon-project"></i>
              <i className="fa-brands fa-css3-alt icon-project"></i>
              <i className="fa-brands fa-js icon-project"></i>
              <i className="fa-brands fa-react icon-project"></i>
            </div>
            <a
              href="https://github.com/ExequielMaydana/ricky-and-morty-v2"
              target="_blank"
              className="project-github"
            >
              <p className="project-enlace-text">Code</p>
              <i className="fa-brands fa-github project-code"></i>
            </a>
            <a
              href="https://ricky-morty-exedev.netlify.app/"
              target="_blank"
              className="project-diploy"
            >
              <p className="project-enlace-text">App</p>
              <i className="fa-solid fa-globe project-probe"></i>
            </a>
          </article>
          <article className="card-project">
            <figure className="container-img-project">
              <img src={portadaPoke} alt="" className="project-img-front" />
              <img src={imagePoke} alt="" className="project-img-back" />
            </figure>
            <p className="card-text">Tecnologias usadas</p>
            <div className="card-tecnologias">
              <i className="fa-brands fa-html5 icon-project"></i>
              <i className="fa-brands fa-css3-alt icon-project"></i>
              <i className="fa-brands fa-js icon-project"></i>
              <i className="fa-brands fa-react icon-project"></i>
              <i className="bx bxl-redux icon-project"></i>
            </div>
            <a
              href="https://github.com/ExequielMaydana/pokedex-v2"
              target="_blank"
              className="project-github"
            >
              <p className="project-enlace-text">Code</p>
              <i className="fa-brands fa-github project-code"></i>
            </a>
            <a
              href="https://pokedex-exedev.netlify.app/"
              target="_blank"
              className="project-diploy"
            >
              <p className="project-enlace-text">App</p>
              <i className="fa-solid fa-globe project-probe"></i>
            </a>
          </article>
          <article className="card-project">
            <figure className="container-img-project">
              <img src={portadaCommerce} alt="" className="project-img-front" />
              <img src={imageCommerce} alt="" className="project-img-back" />
            </figure>
            <p className="card-text">Tecnologias usadas</p>
            <div className="card-tecnologias">
              <i className="fa-brands fa-html5 icon-project"></i>
              <i className="fa-brands fa-css3-alt icon-project"></i>
              <i className="fa-brands fa-js icon-project"></i>
              <i className="fa-brands fa-react icon-project"></i>
              <i className="bx bxl-redux icon-project"></i>
            </div>
            <a
              href="https://github.com/ExequielMaydana/e-commerce-react-v2"
              target="_blank"
              className="project-github"
            >
              <p className="project-enlace-text">Code</p>
              <i className="fa-brands fa-github project-code"></i>
            </a>
            <a
              href="https://e-commerce-exedev.netlify.app/"
              target="_blank"
              className="project-diploy"
            >
              <p className="project-enlace-text">App</p>
              <i className="fa-solid fa-globe project-probe"></i>
            </a>
          </article>
          <article className="card-project">
            <figure className="container-img-project">
              <img src={portadaWeather} alt="" className="project-img-front" />
              <img src={imageWeather} alt="" className="project-img-back" />
            </figure>
            <p className="card-text">Tecnologias usadas</p>
            <div className="card-tecnologias">
              <i className="fa-brands fa-html5 icon-project"></i>
              <i className="fa-brands fa-css3-alt icon-project"></i>
              <i className="fa-brands fa-js icon-project"></i>
              <i className="fa-brands fa-react icon-project"></i>
            </div>
            <a
              href="https://github.com/ExequielMaydana/App-weather-v2"
              target="_blank"
              className="project-github"
            >
              <p className="project-enlace-text">Code</p>
              <i className="fa-brands fa-github project-code"></i>
            </a>
            <a
              href="https://app-weather-exedev.netlify.app/"
              target="_blank"
              className="project-diploy"
            >
              <p className="project-enlace-text">App</p>
              <i className="fa-solid fa-globe project-probe"></i>
            </a>
          </article>
        </div>
      </motion.section>
      <div className="squares1"></div>
      <div className="squares2"></div>
      <div className="squares3"></div>
      <div className="squares4"></div>
    </div>
  );
};

export default Projects;
