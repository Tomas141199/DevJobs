// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import image1 from "../../assets/image-slide-1.jpg";
import image2 from "../../assets/image-slide-2.jpg";
import image3 from "../../assets/image-slide-3.jpg";
import { Link } from "react-router-dom";
const SlideShow = ({ vacantes }) => {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#ff0000",
        "--swiper-pagination-color": "#000000",
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[EffectFade, Pagination, Navigation]}
      className="mySwiper"
      effect={"fade"}
      spaceBetween={30}
      loop={true}
    >
      {vacantes.map((vacante) => (
        <SwiperSlide key={vacante.id}>
          <img src={vacante.urlImagen} />
          <Link to={`/vacante/${vacante.id}`}>
            <div className="absolute font-semibold text-white text-xl  left-1/2 -translate-x-1/2  bottom-3 md:bottom-12">
              {vacante.titulo}
              <span className="block text-sm text-right font-normal">
                {vacante.empresa}
              </span>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideShow;
