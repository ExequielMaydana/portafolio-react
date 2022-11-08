import React, { useEffect, useState } from "react";
import { useContext } from "react";
import ThemeContext from "../utils/ThemeContext";
import "./style/styleForm.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const From = () => {
  const { theme } = useContext(ThemeContext);

  const [valueName, setValueName] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [valueTextArea, setValueTextArea] = useState("");

  //Para hacer las validaciones del nombre, email, y textarea.
  const [login, setLogin] = useState('')
  const [method, setMethod] = useState('')

  const [errorEmail, setErrorEmail] = useState(false)
  const [errorName, setErrorName] = useState(false)

  

  const handleClick = () => { 
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
    if(valueName.length <= 5 || valueName.length > 10){
      setErrorName(true)
      setTimeout(() => {
        setErrorName(false);
      }, 5000);
    }if(regexEmail.test(valueEmail)){
      setLogin('submit')
      setMethod('POST')
    }else{
      setMethod('null')
      setLogin('null')
      setErrorEmail(true)
      setTimeout(() => {
        setErrorEmail(false);
      }, 5000);
    }
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
    <div id="contactMe">
      <motion.section
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className="container-form"
      >
        <form
          className={`form ${theme === "bg-light" && "form-light"}`}
          method={method}
        >
          <input type="hidden" name="form-name" value="contact" method={method} />
          <h3 className="form-title">¡Creemos algo juntos!</h3>
          <div className="form-item">
            <input
              name="name"
              onChange={(e) => setValueName(e.target.value)}
              className={`${valueName ? "has-value has-value-input" : ""} ${
                theme === "bg-light" && "has-value-light has-value-light"
              }`}
              value={valueName}
              id="textbox"
              type="text"
              autoComplete="off"
              required={true}
            />
            <span>
              <i className="bx bx-user-circle"></i>
            </span>
            <label htmlFor="textbox">Su nombre</label>
            <div className="form-item-error">
            {errorName && 'Introduzca un nombre que tenga entre 5 y 10 caracteres'}
            </div>
          </div>
          <div className="form-item">
            <input
              name="email"
              onChange={(e) => setValueEmail(e.target.value)}
              className={`${valueEmail ? "has-value has-value-input" : ""} ${
                theme === "bg-light" && "has-value-light has-value-light"
              }`}
              value={valueEmail}
              id="textbox"
              type="text"
              autoComplete="off"
              required={true}
            />
            <span>
              <i className="bx bx-envelope"></i>
            </span>
            <label htmlFor="textbox">Email</label>
            <div className="form-item-error">
              {errorEmail && 'Email invalidó, ejemplo: example@example.com'}
            </div>
          </div>
          <div className="form-item">
            <textarea
              name="message"
              onChange={(e) => setValueTextArea(e.target.value)}
              className={`${valueTextArea ? "has-value-text" : ""} ${
                theme === "bg-light" && "has-value-text-light"
              }`}
              value={valueTextArea}
              id="textbox"
              required={true}
            ></textarea>
            <label htmlFor="textbox">Deje su mensaje aqui...</label>
          </div>
          <button
          onClick={handleClick}
            type={login}
            className={`form-btn ${theme === "bg-light" && "form-btn-light"}`}
          >
            Submit
          </button>
        </form>
      </motion.section>
    </div>
  );
};

export default From;
