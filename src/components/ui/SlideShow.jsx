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
const SlideShow = () => {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
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
      <SwiperSlide>
        <img src={image1} />
        <div className="absolute font-semibold text-white text-xl right-8 bottom-3 md:bottom-12">
          Devops Developer
          <span className="block text-sm text-right font-normal">
            Microsoft
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} />
        <div className="absolute font-semibold text-white text-xl right-8 bottom-3 md:bottom-12">
          Devops Developer
          <span className="block text-sm text-right font-normal">
            Microsoft
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={image3} />
        <div className="absolute font-semibold text-white text-xl right-8 bottom-3 md:bottom-12">
          Devops Developer
          <span className="block text-sm text-right font-normal">
            Microsoft
          </span>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SlideShow;
