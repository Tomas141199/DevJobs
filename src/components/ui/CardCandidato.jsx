import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";
import CvIcon from "../../assets/cv.png";
import { Link } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";

const CardCandidato = ({ candidato }) => {
  const { id, nombre, correo, telefono, urlCV, vacanteId, createdAt } =
    candidato;
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
      <div className="flex-1 flex flex-col  justify-center items-center">
        <img src={CvIcon} altl="cv-icon" />
        <a href={urlCV} target="_blank">
          Descargar CV
        </a>
      </div>
    </div>
  );
};

export default CardCandidato;
