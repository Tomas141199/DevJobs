import { Link, useLocation } from "react-router-dom";

const Row = () => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
      >
        Front-end
      </th>
      <td class="px-6 py-4">
        <button className="rounded-full px-2 py-1 bg-green-200 text-green-700">
          Activa
        </button>
      </td>
      <td class="px-6 py-4">2 Candidatos</td>
      <td class="px-6 py-4 flex justify-between">
        <Link to="/vacante/edit">Editar</Link>
        <Link to="/vacante/edit" className="text-red-500">
          Eliminar
        </Link>
        <Link to="/vacante/edit">Ver</Link>
      </td>
    </tr>
  );
};

export default Row;
