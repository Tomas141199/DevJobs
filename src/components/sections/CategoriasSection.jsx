import dots from "../../assets/bg-pattern-dots.svg";
import { Link } from "react-router-dom";
const CategoriasSection = () => {
  return (
    <div className="flex md:justify-between flex-col-reverse md:flex-row h-96 md:h-64">
      <div className="flex-1 md:flex-initial w-full md:w-3/6 grid-categorias px-4 md:px-8 mt-4">
        <Link
          to="/vacantes?categoria=full-stack"
          className="categoria-1 bg-categoria-1"
        >
          Full-Stack
        </Link>
        <Link
          to="/vacantes?categoria=full-stack"
          className="categoria-2 bg-categoria-2"
        >
          UI/UX
        </Link>
        <Link
          className="categoria-3 bg-categoria-3"
          to="/vacantes?categoria=full-stack"
        >
          Movil
        </Link>
      </div>
      <div className="relative font-heading bg-bg-primary-blue flex-1 flex items-center justify-center">
        <h3 className="text-white font-bold text-2xl md:text-3xl w-5/6 md:w-1/2">
          Encuentra vacantes por
          <span className="text-primary-jade ml-2">categoría</span>
        </h3>
        <img
          src={dots}
          alt="dots"
          className="absolute hidden md:block right-0 -bottom-8"
        />
      </div>
    </div>
  );
};

export default CategoriasSection;
