import React, { useContext } from 'react'
import './styles/styleHome.css'
import ThemeContext from '../utils/ThemeContext'
import { motion  } from "framer-motion";

const Home = () => {

  const {theme} = useContext(ThemeContext)

  const boxVariant = {
    visible: { opacity: 1, transition:{duration: 1}, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  }


  return (
    <article className='home'>
      <div className={`div-circle ${theme === 'bg-light' ? 'style-light-circle' : null}`}></div>
      <div className={`div-circle1 ${theme === 'bg-light' ? 'style-light-circle1' : null}`}></div>
      <div className={`div-circle2 ${theme === 'bg-light' ? 'style-light-circle2' : null}`}></div>
      <div className={`div-cuadrado ${theme === 'bg-light' ? 'style-light-cuadrado' : null}`}></div>
      <div className={`div-cuadrado1 ${theme === 'bg-light' ? 'style-light-cuadrado1' : null}`}></div>
        
        <section className='name-profession'>
            <h1 className={`title ${theme === 'bg-light' ? 'style-light-title' : null}`}>
  
              Soy Exequiel Maydana, un <br/> profesional
                <div className={`rotate-words ${theme === 'bg-light' ? 'rotate-words-light' : 'rotate-words'}`}>
                    <span className='span1'>front end.</span>
                    <span className='span2'>back end.</span>
                    <span className='span3'>web develoer.</span>
                </div>
            </h1>

            <motion.figure 
            variants={boxVariant}
            initial="hidden"
            animate="visible"
            className='image'
            >
                <div className={`avatar ${theme === 'bg-light' ? 'avatar-light' : 'avatar'}`}></div>
            </motion.figure>

        </section>

        <section className='redes'>
            <ul className='container-icon-redes'>
            <li className={`list__item list__item-instagram ${theme === 'bg-light' ? 'list__item-light list__item-instagram' : 'list__item list__item-instagram' }`} >
              <a href='https://www.instagram.com/exe_m666/' target="_blank" className={`list__link ${theme === 'bg-light' ? 'list_link-light' : 'list__link'}`}>
              <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li className={`list__item list__item-twitter ${theme === 'bg-light' ? 'list__item-light list__item-twitter' : 'list__item list__item-twitter' }`}> 
              <a href='https://twitter.com/ExeBikerr' target="_blank" className={`list__link ${theme === 'bg-light' ? 'list_link-light' : 'list__link'}`}>
              <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li className={`list__item list__item-linkedin ${theme === 'bg-light' ? 'list__item-light list__item-linkedin' : 'list__item list__item-linkedin' }`}>
              <a href='https://www.linkedin.com/in/hernan-exequiel-maydana-913a50218/' target="_blank" className={`list__link ${theme === 'bg-light' ? 'list_link-light' : 'list__link'}`}>
              <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li className={`list__item list__item-github ${theme === 'bg-light' ? 'list__item-light list__item-github' : 'list__item list__item-github' }`}>
              <a href='https://github.com/ExequielMaydana?tab=repositories' target="_blank" className={`list__link ${theme === 'bg-light' ? 'list_link-light' : 'list__link'}`}>
              <i className="fa-brands fa-github"></i>
              </a>
            </li>
            </ul>
        </section>
        <div className="squares3"></div>
        <div className="squares4"></div>
    </article>

  )
}

export default Home