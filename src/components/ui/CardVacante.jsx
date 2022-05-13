import eye from "../../assets/eye.png";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";
import { Link } from "react-router-dom";

const CardVacante = ({ vacante }) => {
  const { id, titulo, empresa, categoria, salario, experiencia, createdAt } =
    vacante;
  return (
    <div className="relative cursor-pointer border-l-4 border-gray-500 h-36 px-3 py-1 shadow-lg">
      <h2 className="text-primary-jade font-semibold">{titulo}</h2>
      <div className="text-sm">{empresa}</div>
      <div className="text-sm">
        Categoria: <span className="text-primary-jade">{categoria}</span>
      </div>
      <div className="text-sm">
        Salario: <span className="text-primary-jade">{salario}</span>
      </div>
      <div className="text-sm">
        Experiencia: <span className="text-primary-jade">{experiencia}</span>
      </div>
      <div className="text-sm">
        Hace:{" "}
        <span className="text-primary-jade">
          {formatDistanceToNow(new Date(createdAt), { locale: es })}
        </span>
      </div>
      <div className="absolute top-0 left-0 h-full w-full vacante-hover z-10">
        <Link to={`/vacante/${id}`}>
          <div className="duration-300 ease-in-out eye-link scale-0 absolute z-30 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <img
              src={eye}
              alt="img"
              className="duration-300 hover:rotate-180"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardVacante;
