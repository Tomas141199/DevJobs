import eye from "../../assets/eye.png";

const CardVacante = () => {
  return (
    <div className="relative cursor-pointer border-l-4 border-gray-500 h-36 px-3 py-1 shadow-lg">
      <h2 className="text-primary-jade font-semibold">Front-end developer</h2>
      <div className="text-sm">Categoria</div>
      <div className="text-sm">
        Categoria: <span className="text-primary-jade">Front-end</span>
      </div>
      <div className="text-sm">
        Categoria: <span className="text-primary-jade">Front-end</span>
      </div>
      <div className="text-sm">
        Categoria: <span className="text-primary-jade">Front-end</span>
      </div>
      <div className="text-sm">
        Categoria: <span className="text-primary-jade">Front-end</span>
      </div>
      <div className="absolute top-0 left-0 h-full w-full vacante-hover z-10">
        <div className="duration-300 ease-in-out eye-link scale-0 absolute z-30 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <img src={eye} alt="img" className="duration-300 hover:rotate-180" />
        </div>
      </div>
    </div>
  );
};

export default CardVacante;
