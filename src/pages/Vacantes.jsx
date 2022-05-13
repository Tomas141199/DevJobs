import CardVacante from "./../components/ui/CardVacante";
import useVacante from "./../hooks/useVacante";
import Fade from "react-reveal/Fade";
import NavCategorias from "./../components/ui/NavCategorias";
import { useSearchParams } from "react-router-dom";
const Vacantes = () => {
  const [searchParams] = useSearchParams();
  const vacantes = useVacante(searchParams.get("categoria") ?? null);
  return (
    <div>
      <NavCategorias />

      <div className="mt-12 w-10/12 container mx-auto mb-12">
        <h1 className="text-center text-blue-deep font-semibold text-2xl">
          Vacantes <span className="text-primary-jade">disponibles</span>
        </h1>
        <Fade left>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vacantes.length === 0 ? (
              <p className="font-semibold text-center mx-auto">
                Aun no hay nada :C
              </p>
            ) : (
              vacantes.map((vacante) => (
                <CardVacante key={vacante.id} vacante={vacante} />
              ))
            )}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Vacantes;
