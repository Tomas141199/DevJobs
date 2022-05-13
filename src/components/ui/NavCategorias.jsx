import { Link, useLocation } from "react-router-dom";
import useCollection from "./../../hooks/useCollection";
import { useSearchParams } from "react-router-dom";

const NavCategorias = () => {
  const location = useLocation();
  const pathActual = location.pathname;
  const categorias = useCollection("Categorias");
  const [searchParams] = useSearchParams();
  const categoriaActual = searchParams.get("categoria") ?? null;

  return (
    <nav className="w-full flex flex-start bg-gray-700 text-white overflow-x-auto">
      <Link
        to="/vacantes"
        className={`duration-300 hover:bg-primary-jade px-3 py-2  ${
          !categoriaActual ? "bg-gray-500" : ""
        }`}
      >
        Todas
      </Link>

      {categorias.map((categoria) => {
        return (
          <Link
            key={categoria.id}
            to={`/vacantes?categoria=${categoria.nombre}`}
            className={`duration-300 hover:bg-primary-jade px-3 py-2   ${
              categoriaActual === categoria.nombre ? "bg-gray-500" : ""
            }`}
          >
            {categoria.nombre}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavCategorias;
