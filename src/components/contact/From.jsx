import React, { useEffect, useState } from "react";
import { useContext } from "react";
import ThemeContext from "../utils/ThemeContext";
import "./style/styleForm.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const From = () => {
  const { theme } = useContext(ThemeContext);

  const {handleSubmit, register, reset } = useForm()

  //Para hacer las validaciones del nombre, email, y textarea.
  const [login, setLogin] = useState('')

  
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorName, setErrorName] = useState(false)
  const [errorMensaje, setErrorMensaje] = useState(false)


  const submit = data => { 
    const regexEmail =  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    let name = data.nombre
    let emailUser = data.email
    let mensajeUser = data.mensaje
    if(name.length <= 5 || name.length > 10){
      setErrorName(true)
      setTimeout(() => {
        setErrorName(false);
      }, 5000);
    }else if(!regexEmail.test(emailUser)){
      setErrorEmail(true)
      setTimeout(() => {
        setErrorEmail(false);
      }, 5000);
    }else if(mensajeUser.length == 0){
        setErrorMensaje(true)
        setTimeout(() => {
          setErrorMensaje(false);
        }, 5000);
    }else{
      setLogin('submit')
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
          onSubmit={handleSubmit(submit)}
          className={`form ${theme === "bg-light" && "form-light"}`}
          method="POST"
        >
          <input type="hidden" name="form-name" value="contact" method="POST" />
          <h3 className="form-title">¡Creemos algo juntos!</h3>
          <div className="form-item">
            <input
              name="name"
              className="has-value has-value-input"
              type="text"
              autoComplete="off"
              required={true}
              placeholder="Nombre"
              {...register("nombre")}
            />
            <span>
              <i className="bx bx-user-circle"></i>
            </span>
          </div>
          <div className="form-item">
            <input
              name="email"
              className="has-value has-value-input"
              type="email"
              autoComplete="off"
              required={true}
              placeholder="Email"
              {...register("email")}
            />
            <span>
              <i className="bx bx-envelope"></i>
            </span>
          </div>
          <div className="form-item">
            <textarea
              name="message"
              className="has-value has-value-input" 
              required={true}
              placeholder="Deposite su mensaje aquí…"
              {...register("mensaje")}
            ></textarea>
          </div>
          <button
            type={login}
            className={`form-btn ${theme === "bg-light" && "form-btn-light"}`}
          >
            Submit
          </button>
          <p className="form-item-error">
            {errorName && 'Introduzca un nombre que tenga entre 5 y 10 caracteres.'}
            </p>
            <p className="form-item-error">
              {errorEmail && 'Email invalidó, ejemplo: example@example.com'}
            </p>
            <p className="form-item-error">
              {errorMensaje && '¿Porque quieres enviar un email vacío? Escribe un mensaje!'}
            </p>
        </form>
      </motion.section>
    </div>
  );
};

export default From;
