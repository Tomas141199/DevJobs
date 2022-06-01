import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";
import CvIcon from "../../assets/cv.png";
import { Link } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import iconWhats from "../../assets/icon-whats.svg";
import fireService from "./../../firebase/firebaseservice";
import NotifyContext from "./../../context/notify/notifyContext";
import { useContext } from "react";
import boteBasura from "../../assets/trash-can.png";
import { useNavigate } from "react-router-dom";

const CardCandidato = ({ candidato }) => {
  const { id, nombre, correo, telefono, urlCV, vacanteId, createdAt } =
    candidato;
  const { mostrarNotificacion } = useContext(NotifyContext);
  const navigate = useNavigate();

  const eliminarCandidato = () => {
    fireService.delSolicitud(id, vacanteId);
    navigate("/");
    mostrarNotificacion("Candidato eliminado: " + nombre);
  };

  return (
    <div className="w-full flex justify-between items-center cursor-pointer border-l-4 border-gray-500  px-3 py-3 shadow-lg">
      <div className="flex-1">
        <h2 className="text-primary-jade font-semibold">Candidato</h2>
        <div className="text-sm">
          Nombre: <span className="text-primary-jade">{nombre}</span>
        </div>
        <div className="text-sm">
          Correo: <span className="text-primary-jade">{correo}</span>
        </div>
        <div className="text-sm">
          Telefono: <span className="text-primary-jade">{telefono}</span>
        </div>
        <div className="text-sm">
          Hace:{" "}
          <span className="text-primary-jade">
            {formatDistanceToNow(new Date(createdAt), { locale: es })}
          </span>
        </div>
      </div>
      <div className="flex-1 flex justify-around items-center">
        <div className="flex flex-col justify-center items-center">
          <img src={CvIcon} altl="cv-icon" />
          <a href={urlCV} target="_blank">
            Descargar CV
          </a>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={iconWhats} altl="cv-icon" className="w-7" />
          <a href={`https://wa.me/${telefono}`} target="_blank">
            Enviar mensaje
          </a>
        </div>
        <div
          onClick={eliminarCandidato}
          className="flex flex-col justify-center items-center"
        >
          <img src={boteBasura} altl="cv-icon" className="w-7" />
          <a>Eliminar</a>
        </div>
      </div>
    </div>
  );
};

export default CardCandidato;
