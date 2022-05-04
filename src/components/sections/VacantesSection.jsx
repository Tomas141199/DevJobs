import SlideShow from "../ui/SlideShow";

const VacantesSection = () => {
  return (
    <div className="flex justify-between flex-col  gap-2 md:gap-0 md:flex-row  h-96 md:h-64">
      <div className="relative bg-bg-primary-blue flex-1 flex items-center justify-center font-heading">
        <h3 className="text-white font-bold text-2xl sm:text-3xl w-5/6 md:w-1/2">
          <span className="text-primary-jade mr-2">Explora</span>
          las vacantes
        </h3>
      </div>
      <div className="w-3/6 md:w-1/2 mx-auto text-left flex items-center bg-primary-jade">
        <SlideShow />
      </div>
    </div>
  );
};

export default VacantesSection;
