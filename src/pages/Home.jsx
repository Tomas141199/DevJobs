import CategoriasSection from "../components/sections/CategoriasSection";
import GuiaSection from "../components/sections/GuiaSection";
import VacantesSection from "../components/sections/VacantesSection";
import Hero from "../components/ui/Hero";
import { Link } from "react-router-dom";
import wavy from "../assets/bg-pattern-wave-red.svg";
import Fade from "react-reveal/Fade";
import { useContext, useEffect, useState } from "react";
import NotifyContext from "./../context/notify/notifyContext";
import { infoNotify } from "../helpers/notify";
import { ToastContainer } from "react-toastify";
import useVacante from "./../hooks/useVacante";

const Home = () => {
  //Context de las notificaciones
  const { notificacion, limpiarNotificacion } = useContext(NotifyContext);
  const vacantes = useVacante(null);

  useEffect(() => {
    if (notificacion) {
      limpiarNotificacion();
      infoNotify(notificacion.mensaje);
    }
  }, []);
  return (
    <div>
      {/* Alertas por notificacion */}
      <ToastContainer limit={1} />
      <Fade bottom>
        <Hero />
        <CategoriasSection />
        <GuiaSection />
        <VacantesSection vacantes={vacantes} />
        <div className="flex justify-center flex-col sm:flex-row gap-6 items-center h-56">
          <h3 className="relative text-blue-deep font-bold text-2xl w-5/6 md:w-1/2 text-center">
            <img
              src={wavy}
              alt="wavy"
              className="hidden md:block absolute w-12 bottom-1 left-2"
            />
            Conoce todas las
            <span className="text-primary-jade ml-2">vacantes</span>
          </h3>
          <Link className="btn bg-primary-red" to="/vacantes">
            Explorar
          </Link>
        </div>
      </Fade>
    </div>
  );
};

export default Home;
