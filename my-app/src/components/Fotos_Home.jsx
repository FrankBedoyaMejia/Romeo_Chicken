import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import imagenes from "../Data/images_Main.json";
import { Navigation, Keyboard, Mousewheel, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-flip";
import "swiper/css/effect-fade";

export function Fotos_Home() {
  const navigation = useNavigate();
  return (
    <div key={"swiper-home-page"} className="productos">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        cssMode={true}
        navigation={true}
        // pagination={true}
        loop={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
        key={"swiper-home-page"}
        className="productos-container"
      >
        {imagenes.map((imagen) => {
          return (
            <SwiperSlide
              key={imagen.url + "swiper-home-page"}
              className="productos-slider"
            >
              <div
                className="productos-img"
                key={imagen.title + imagen.url}
                style={{ backgroundImage: `url(${imagen?.url})` }}
              ></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
