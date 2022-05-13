import NavAdmin from "../../components/ui/NavAdmin";
import Row from "./../../components/ui/Row";
import Fade from "react-reveal/Fade";
import AuthContext from "./../../context/auth/AuthContext";
import { useEffect, useContext, useState } from "react";
import fireService from "./../../firebase/firebaseservice";
import Spin from "./../../components/spinners/Spin";

const PanelVacantes = () => {
  const { usuario } = useContext(AuthContext);
  const [vacantes, setVacantes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const obtenerPublicaciones = async () => {
      if (usuario.uid) {
        const datos = await fireService.getVacantesByUserId(usuario.uid);
        setVacantes(datos);
        setLoading(false);
      }
    };
    obtenerPublicaciones();
  }, [usuario]);

  return (
    <>
      <NavAdmin />

      <Fade big>
        <div className="w-10/12 container mx-auto mt-12">
          <h1 className="text-center text-blue-deep font-semibold text-2xl">
            <span className="text-primary-jade">Administrar</span> Vacantes
          </h1>
          <div className="mt-12 relative overflow-x-auto  rounded-sm">
            {loading ? (
              <Spin />
            ) : (
              <table className="shadow-md table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
                  {vacantes.map((vacante) => (
                    <Row key={vacante.id} vacante={vacante} />
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </Fade>
    </>
  );
};

export default PanelVacantes;
