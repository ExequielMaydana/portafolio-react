import React, {useContext} from "react";
import "./styles/styleSkills.css";
import ThemeContext from '../utils/ThemeContext'

const Skills = () => {

  const {theme} = useContext(ThemeContext)



  return (
    <article className={`skills-container ${theme === 'bg-light' ? 'skills-container-light' : 'skills-container'}`}>
      
      <section className={`skills-title ${theme === 'bg-light' ? 'skills-title-light' : 'skills-title'}`}>
        <h2>Habilidades</h2>
      </section>
      <section className="container-skills">
        <div className="skills-item">
          <i className="fa-brands fa-html5 icon-skill"></i>
          <p className={`skill-name ${theme === 'bg-light' ? 'skill-name-light' : 'skill-name'}`}>Html5</p>
        </div>
        <div className="skills-item">
          <i className="fa-brands fa-css3-alt icon-skill"></i>
          <p className={`skill-name ${theme === 'bg-light' ? 'skill-name-light' : 'skill-name'}`}>Css3</p>
        </div>
        <div className="skills-item">
          <i className="fa-brands fa-js icon-skill"></i>
          <p className={`skill-name ${theme === 'bg-light' ? 'skill-name-light' : 'skill-name'}`}>JavaScript</p>
        </div>
        <div className="skills-item">
          <i className="fa-brands fa-react icon-skill"></i>
          <p className={`skill-name ${theme === 'bg-light' ? 'skill-name-light' : 'skill-name'}`}>React</p>
        </div>
        <div className="skills-item">
        <i className='bx bxl-redux icon-skill'></i>
        <p className={`skill-name ${theme === 'bg-light' ? 'skill-name-light' : 'skill-name'}`}>Redux</p>
        </div>
        <div className="skills-item">
          <i className="fa-brands fa-node-js icon-skill"></i>
          <p className={`skill-name ${theme === 'bg-light' ? 'skill-name-light' : 'skill-name'}`}>Node</p>
        </div>
        <div className="skills-item">
          <i className="bx bxl-postgresql icon-skill"></i>
          <p className={`skill-name ${theme === 'bg-light' ? 'skill-name-light' : 'skill-name'}`}>PostgreSQL</p>
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
