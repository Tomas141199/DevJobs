const GuiaSection = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row  h-96 md:h-64">
      <div className="flex-1 flex items-center justify-center font-heading">
        <h3 className="text-blue-deep font-heading font-bold text-2xl sm:text-3xl w-5/6 md:w-1/2">
          <span className="text-primary-jade mr-2">Aplica</span>
          rápidamente a una vacante
        </h3>
      </div>
      <div className="flex-1 bg-primary-red text-left flex items-center">
        <div className="w-8/12 mx-auto">
          <div className="list before:content-['01']">
            Selecciona al vacantes
          </div>
          <div className="list before:content-['02']">
            Agrega tu información de contacto
          </div>
          <div className="list before:content-['03']">Agrega tu CV</div>
          <div className="list before:content-['04']">¡Suerte!</div>
        </div>
      </div>
    </div>
  );
};

export default GuiaSection;
