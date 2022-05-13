import iconGoogle from "../../assets/icon-google.svg";
import { Form, Formik } from "formik";
import Field from "../../components/form/Field";
import { loginSchema, loginValues } from "../../validation/login";
import Button from "../../components/form/Button";
import jerry from "../../assets/image-jeremy-large.png";
import pattern1 from "../../assets/bg-pattern-1.svg";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import fireService from "./../../firebase/firebaseservice";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { errorNotify } from "./../../helpers/notify";

const Login = () => {
  const navigate = useNavigate();

  const loginWithGoogle = () => {
    signInWithPopup(fireService.auth, fireService.provideer)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate("/");
      })
      .catch((error) => {
        errorNotify(error.code);
      });
  };

  //Funcion para iniciar sesion con Email y Contrasenia
  const iniciarSesionConEmailandPassword = (values) => {
    //Obtencion de los campos de formik
    const { email, password } = values;
    //Inicio de sesion con los parametros
    signInWithEmailAndPassword(fireService.auth, email, password)
      .then((userCredential) => {
        // Se autentico correctamente
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        errorNotify(error.code);
      });
  };

  return (
    <div className="h-screen  flex justify-center items-center">
      {/* Alertas por notificacion */}
      <ToastContainer />
      <div className="flex flex-col md:flex-row w-128 mx-auto bg-bg-primary-blue rounded-sm">
        <div className="relative h-28 md:h-auto md:w-3/6">
          <img
            src={jerry}
            alt="jerry"
            className="duration-300 ease-linear w-28 md:w-full absolute bottom-0 left-1/2 -translate-x-1/2 md:translate-x-0  md:-left-6 z-10"
          />

          <Fade left>
            <img
              src={pattern1}
              alt="pattern"
              className="w-24 md:w-full z-0 absolute bottom-6 left-1/2 md:bottom-4 md:-left-32"
            />
          </Fade>
        </div>
        <div className="mx-auto w-5/6 sm:w-4/6 p-2">
          <Pulse>
            <h1 className="relative z-30 text-white font-medium text-xl">
              <span className="text-primary-jade">Ingresa</span> para comenzar a
              publicar y encontrar lo que buscas
            </h1>
          </Pulse>

          <div className="relative z-40 mt-5 flex flex-col items-center">
            <button
              onClick={loginWithGoogle}
              className="w-36 text-gray-800 bg-white flex justify-center items-center gap-1 px-3 py-1 rounded-full text-sm duration-300 hover:scale-105"
            >
              Continuar con
              <img className="w-4" src={iconGoogle} alt="icon-google" />
            </button>
            <Formik
              initialValues={loginValues}
              validationSchema={loginSchema}
              onSubmit={iniciarSesionConEmailandPassword}
            >
              <Form className="mt-4 w-full sm:w-11/12 mx-auto">
                <Field name="email" type="email" placeholder="Tu correo" />
                <Field
                  name="password"
                  type="password"
                  placeholder="Tu contraseña"
                />
                {/* Submit para enviar formulario */}
                <Button value="Entrar" color="bg-primary-jade" />
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
