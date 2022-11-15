import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import FakeSlide from "./FakeSlide";

export default function FolhetoShow2() {
  return (
    <section>
      <div className="h-screen w-screen bg flex rows">
        <div className="w-screen h-full bg-red-800 xl:w-4/5">
          <div className="w-full h-full grid grid-rows-2 bg-border">
            <div className="w-full h-screen">
              <>
                <div className="absolute bottom-0 w-full h-12 bg-red-800"></div>
                <div className="w-9/12 h-11/12 absolute left-0 top-0 column">
                  <Swiper
                    // install Swiper modules
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={2}
                    navigation
                    className="w-full h-full bg-border"
                  >
                    <SwiperSlide className="w-full h-full">
                      <img
                        src={require("../../assets/hp.png")}
                        className="w-full h-full object-contain"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="w-full h-full">
                      <img
                        src={require("../../assets/lenovo.png")}
                        className="w-full h-full object-contain"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="w-full h-full">
                      <img
                        src={require("../../assets/makro.png")}
                        className="w-full h-full object-contain"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="w-full h-full">Slide 4</SwiperSlide>
                  </Swiper>
                  <div className="bg-yellow-800 w-full h-full"></div>
                </div>
              </>
            </div>
            <div className="xl:w-4/5 w-full h-10 bg-yellow-300 absolute bottom-0"></div>
          </div>
        </div>
        <div className="w-0 h-screen bg-green-800 xl:w-1/5"></div>
      </div>
    </section>
  );
}
