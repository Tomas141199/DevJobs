import { Link, useLocation } from "react-router-dom";

const NavAdmin = () => {
  const location = useLocation();
  const pathActual = location.pathname;

  return (
    <nav className="w-full flex flex-start bg-gray-700 text-white">
      <Link
        to="/admin/"
        className={`duration-300 hover:bg-primary-jade px-3 py-2  ${
          pathActual === "/admin/" ? "bg-gray-600" : ""
        }`}
      >
        Panel
      </Link>
      <Link
        to="/admin/crear-publicacion"
        className={`duration-300 hover:bg-primary-jade px-3 py-2  ${
          pathActual === "/admin/crear-publicacion" ? "bg-gray-600" : ""
        }`}
      >
        Publicar
      </Link>
      <Link
        to="/vacantes"
        className={`duration-300 hover:bg-primary-jade px-3 py-2  ${
          pathActual === "/vacantes" ? "bg-gray-600" : ""
        }`}
      >
        Ver vacantes
      </Link>
    </nav>
  );
};

export default NavAdmin;
