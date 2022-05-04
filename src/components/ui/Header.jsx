import logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const pathActual = location.pathname;

  return (
    <div
      className={`${
        pathActual === "/" ? "navbar-inicio" : "bg-bg-primary-blue"
      } px-1 py-4 flex justify-around items-center bg`}
    >
      <Link to="/" className="cursor-pointer duration-300 hover:scale-105">
        <img src={logo} className="w-24" />
      </Link>
      <nav className="hidden md:flex justify-between items-center gap-3 text-sm">
        <Link
          to="/"
          className="text-white bg-primary-jade rounded-full px-1 duration-300 ease-linear hover:bg-green-300"
        >
          Inicio
        </Link>
        <Link to="/login" className="relative text-white link-after">
          Acceder
        </Link>
        <Link to="/login" className="relative text-white link-after">
          Registro
        </Link>
      </nav>
    </div>
  );
};

export default Header;
