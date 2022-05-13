import { Link, useNavigate } from "react-router-dom";
import fireService from "./../../firebase/firebaseservice";
import { useState, useContext } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import NotifyContext from "./../../context/notify/notifyContext";
import { errorNotify } from "./../../helpers/notify";

const Row = ({ vacante }) => {
  const { id, titulo, estado, candidatos } = vacante;
  const [status, setStatus] = useState(estado);
  const navigate = useNavigate();
  const { mostrarNotificacion } = useContext(NotifyContext);

  const cambiarEstado = () => {
    fireService.changeStatus(id, !status);
    setStatus(!status);
  };

  const mostrarAlerta = () => {
    confirmAlert({
      title: "Eliminar Noticia",
      message: "¿Esta seguro de hacer esto?",
      buttons: [
        {
          label: "Si",
          onClick: () => eliminarVacante(),
        },
        {
          label: "Cancelar",
          onClick: () => {
            return;
          },
        },
      ],
    });
  };

  const eliminarVacante = async () => {
    try {
      await fireService.delVacante(id);
      navigate("/");
      mostrarNotificacion(
        "Vacante eliminada, la vancante se borro correctamente"
      );
    } catch (e) {
      errorNotify("Algo salio mal...");
    }
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
      >
        {titulo}
      </th>
      <td className="px-6 py-4">
        <button
          onClick={cambiarEstado}
          className={`rounded-full px-2 py-1 ${
            status ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"
          } `}
        >
          {status ? "Activa" : "Inactiva"}
        </button>
      </td>
      <td className="px-6 py-4">
        <Link className="hover:underline" to={`/candidatos/${id}`}>
          {candidatos} Candidatos
        </Link>
      </td>
      <td className="px-6 py-4 flex justify-between">
        <Link to={`/vacante/edit/${id}`}>Editar</Link>
        <button
          onClick={() => mostrarAlerta()}
          to="/vacante/edit"
          className="text-red-500"
        >
          Eliminar
        </button>
        <Link to={`/vacante/${id}`}>Ver</Link>
      </td>
    </tr>
  );
};

export default Row;
