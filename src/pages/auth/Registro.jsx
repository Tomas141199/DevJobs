import { Form, Formik } from "formik";
import Field from "../../components/form/Field";
import Button from "../../components/form/Button";
import dotsRed from "../../assets/bg-pattern-dots-red.svg";
import wavyRed from "../../assets/bg-pattern-wave-red.svg";
import Slide from "react-reveal/Slide";
import Pulse from "react-reveal/Pulse";
import { registroValues, registroSchema } from "../../validation/registro";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import fireService from "../../firebase/firebaseservice";
import { useNavigate } from "react-router-dom";
import NotifyContext from "../../context/notify/notifyContext";
import { useContext } from "react";
import { errorNotify } from "./../../helpers/notify";
import { ToastContainer } from "react-toastify";

const Registro = () => {
  const navigate = useNavigate();
  const { mostrarNotificacion } = useContext(NotifyContext);

  //Funcion para registrar un nuevo usuario
  const registerNewUser = async (values) => {
    const { nombre, email, password } = values;
    try {
      //Registro del nuevo usuario
      await createUserWithEmailAndPassword(fireService.auth, email, password);
      //Actualiza el nombre del usuario
      await updateProfile(fireService.auth.currentUser, {
        displayName: `${nombre}`,
      });
      mostrarNotificacion("Registro exitoso!, ya puede comenzar a publicar");
      navigate("/");
      //Fin de la operacion
    } catch (error) {
      errorNotify(error.code);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      {/* Alertas por notificacion */}
      <ToastContainer />
      <div className="flex flex-col-reverse md:flex-row gap-6 w-140">
        <div className="relative flex-1 bg-bg-primary-blue py-2 px-10 rounded-sm">
          <Pulse>
            <h1 className="relative z-30 text-white font-medium text-xl mt-6">
              Ingresa todos los campos para
              <span className="text-primary-red ml-1">crear tu cuenta</span>
            </h1>
          </Pulse>

          <Formik
            initialValues={registroValues}
            validationSchema={registroSchema}
            onSubmit={(values) => registerNewUser(values)}
          >
            <Form className="mt-8 w-full sm:w-11/12 mx-auto">
              <Field name="nombre" type="text" placeholder="Tu nombre" />
              <Field name="email" type="email" placeholder="Tu Correo" />
              <Field
                name="password"
                type="password"
                placeholder="Tu contraseña"
              />
              {/* Submit para enviar formulario */}
              <Button value="Crear cuenta" color="bg-primary-red" />
            </Form>
          </Formik>

          <img
            src={wavyRed}
            alt="dots-red"
            className="hidden md:block w-16 absolute top-1/2 -translate-y-1/2 -right-8"
          />
          <Slide bottom>
            <img
              src={dotsRed}
              alt="dots-red"
              className="absolute -bottom-10 -left-12"
            />
          </Slide>
        </div>
        <div className="flex-1 flex items-center justify-center text-center">
          <h2 className="relative z-30 text-blue-deep font-medium text-xl mt-6">
            <span className="text-primary-red ml-1 block">
              ¿Eres reclutador?
            </span>
            Crea una cuenta totalmente gratis y comienza a publicar
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Registro;
