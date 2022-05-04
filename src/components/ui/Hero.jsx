import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="w-full h-96 md:h-hero bg-[url('assets/image-hero.jpg')] bg-right bg-no-repeat bg-cover md:bg-contain">
      <div className="h-full w-full flex items-center">
        <div className="ml-2 md:ml-24 font-heading font-extrabold text-2xl md:text-3xl">
          <h1 className="w-11/12 sm:w-1/2 mx-4 md:mx-0">
            Encuentra un trabajo remoto o presencial en tu país
          </h1>
          <span className="block mt-4 mx-4 md:mx-0 text-primary-jade">
            Para desarrolladores y diseñadores web
          </span>
          <Link className="btn mt-12 ml-2 bg-primary-jade" to="/vacantes">
            Explorar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
