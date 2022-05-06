import CardVacante from "./../components/ui/CardVacante";

const Vacantes = () => {
  return (
    <div className="mt-12 w-10/12 container mx-auto">
      <h1 className="text-center text-blue-deep font-semibold text-2xl">
        Nueva <span className="text-primary-jade">Vacante</span>
      </h1>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardVacante />
        <CardVacante />
        <CardVacante />
        <CardVacante />
        <CardVacante />
        <CardVacante />
        <CardVacante />
        <CardVacante />
      </div>
    </div>
  );
};

export default Vacantes;
