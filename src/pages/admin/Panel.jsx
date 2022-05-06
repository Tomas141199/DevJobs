import NavAdmin from "../../components/ui/NavAdmin";
import Row from "./../../components/ui/Row";
import Fade from "react-reveal/Fade";

const PanelVacantes = () => {
  return (
    <>
      <NavAdmin />
      <Fade big>
        <div className="w-10/12 container mx-auto mt-12">
          <h1 className="text-center text-blue-deep font-semibold text-2xl">
            <span className="text-primary-jade">Administrar</span> Vacantes
          </h1>
          <div className="mt-12 relative overflow-x-auto shadow-md rounded-sm">
            <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Titulo
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Estado
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Candidatos
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                <Row />
                <Row />
                <Row />
              </tbody>
            </table>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default PanelVacantes;
