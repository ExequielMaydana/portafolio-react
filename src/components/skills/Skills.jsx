import React from "react";
import "./styles/styleSkills.css";

const Skills = () => {
  return (
    <article className="skills-container">
      <section className="skills-title">
        <h2>Habilidades</h2>
      </section>
      <section className="container-skills">
        <div className="skills-item">
          <i className="fa-brands fa-html5 icon-skill"></i>
          <p className="skill-name">Html5</p>
        </div>
        <div className="skills-item">
          <i className="fa-brands fa-css3-alt icon-skill"></i>
          <p className="skill-name">Css3</p>
        </div>
        <div className="skills-item">
          <i className="fa-brands fa-js icon-skill"></i>
          <p className="skill-name">JavaScript</p>
        </div>
        <div className="skills-item">
          <i className="fa-brands fa-react icon-skill"></i>
          <p className="skill-name">React</p>
        </div>
        <div className="skills-item">
          <i className="bx bxl-redux icon-skill"></i>
          <p className="skill-name">Redux</p>
        </div>
        <div className="skills-item">
          <i className="fa-brands fa-node-js icon-skill"></i>
          <p className="skill-name">Node</p>
        </div>
        <div className="skills-item">
          <i className="bx bxl-postgresql icon-skill"></i>
          <p className="skill-name">PostgreSQL</p>
        </div>
      </section>
      <div className="skill-circle"></div>
      <div className="skill-circle1"></div>
      <div className="skill-circle2"></div>
      <div className="skill-cuadrado"></div>
      <div className="skill-cuadrado1"></div>
      <div className="skill-cuadrado2"></div>
    </article>
  );
};

export default Skills;
