
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import ThemeContext from '../utils/ThemeContext'
import './style/styleForm.css'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const From = () => {

const {theme} = useContext(ThemeContext)

const [valueName, setValueName] = useState('')
const [valueEmail, setValueEmail] = useState('')
const [valueTextArea, setValueTextArea] = useState('')


  const handleChangeName = () => {
    console.log(`${valueName}, ${valueEmail}, ${valueTextArea}`);
      setValueName('')
      setValueEmail('')
      setValueTextArea('')
  }

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
    <motion.section 
    ref={ref}
    variants={boxVariant}
    initial="hidden"
    animate={control}
    className='container-form'
    >
        <form className={`form ${theme === 'bg-light' && 'form-light'}`} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
          <h3 className='form-title'>¡Creemos algo juntos!</h3>
            <div className='form-item'>
               <input 
                onChange={e => setValueName(e.target.value)}
                className={`${valueName ? 'has-value has-value-input' : ''} ${theme === 'bg-light' && 'has-value-light has-value-light'}`}
                value={valueName}
                id='textbox'
                type='text'
                autoComplete='off'
                />
                <span><i className='bx bx-user-circle'></i></span>
                <label htmlFor='textbox'>Su nombre</label>
            </div>
            <div className='form-item'>
            <input 
                onChange={e => setValueEmail(e.target.value)}
                className={`${valueEmail ? 'has-value has-value-input' : ''} ${theme === 'bg-light' && 'has-value-light has-value-light'}`}
                value={valueEmail}
                id='textbox'
                type='text'
                autoComplete='off'
                />
                <span><i className='bx bx-envelope'></i></span>
                <label htmlFor='textbox'>Email</label>
            </div>
            <div className='form-item'>
              <textarea
                  onChange={e => setValueTextArea(e.target.value)}
                  className={`${valueTextArea ? 'has-value-text' : ''} ${theme === 'bg-light' && 'has-value-text-light'}`}
                  value={valueTextArea}
                  id='textbox'
              >
              
              </textarea>
              <label htmlFor='textbox'>Deje su mensaje aqui...</label>
            </div>
            <button onClick={handleChangeName} type="submit" className={`form-btn ${theme === 'bg-light' && 'form-btn-light'}`}>Submit</button>
        </form>
    </motion.section>
  )
}

export default From