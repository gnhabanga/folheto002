// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Zoom } from "swiper";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  IoIosArrowDropleft,
  IoIosArrowDropright,
  IoMdAddCircleOutline,
  IoMdClose,
} from "react-icons/io";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/zoom";
import "swiper/css/scrollbar";

const data = [
  {
    id: 0,
    src: require("../../assets/hp.png"),
  },
  {
    id: 1,
    src: require("../../assets/lenovo.png"),
  },
  {
    id: 2,
    src: require("../../assets/makro.png"),
  },
  {
    id: 3,
    src: require("../../assets/lenovo.png"),
  },
  {
    id: 4,
    src: require("../../assets/makro.png"),
  },
];

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}

export default function FakeSlide() {
  const [height, width] = useWindowSize();
  const [maxRatio, setMaxRatio] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  const swiper = useSwiper();

  const [value, setValue] = useState(1);
  const navigate = useNavigate();
  return (
    <div className="flex columns-2 h-screen w-screen">
      <div
        style={{
          width: "80%",
          height: "93vh",
        }}
      >
        <div style={{ width: "100%", height: "93vh" }}>
          <button
            style={{
              width: width >= 1025 ? 50 : 0,
              height: width >= 1025 ? 50 : 0,
              backgroundColor: "black",
              opacity: "75%",
              position: "absolute",
              right: "18%",
              display: "flex",
              top: 5,
              borderRadius: 50,
              margin: 0,
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => navigate(-1)}
          >
            <IoMdClose size={40} color={"white"} />
          </button>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Zoom]}
            spaceBetween={0}
            slidesPerView={width >= 1003 ? 2 : 1}
            navigation={{ nextEl, prevEl }}
            className="w-full h-full"
            zoom
          >
            {data.map((value, index) => (
              <SwiperSlide
                className="w-full h-full"
                zoom
                key={index}
                onChange={(prev) => setValue(prev)}
              >
                <img
                  src={value.src}
                  alt={value.src}
                  className="w-screen h-screen object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          style={{
            width: "100%",
            height: "7vh",
            backgroundColor: "lightgray",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderTopWidth: 1,
            borderTopColor: "gray",
          }}
        >
          <button
            style={{
              width: 35,
              height: 35,
              borderRadius: 50,
              margin: 0,
            }}
            ref={(node) => setPrevEl(node)}
          >
            <IoIosArrowDropleft size={32} />
          </button>
          <div style={{ marginLeft: 5, marginRight: 5 }}>
            Pagina {value} de {data.length - 1}
          </div>
          <button
            style={{
              width: 35,
              height: 35,
              borderRadius: 50,
              margin: 0,
            }}
            ref={(node) => setNextEl(node)}
          >
            <IoIosArrowDropright size={32} />
          </button>
        </div>
      </div>
      <div
        style={{
          width: width >= 1003 ? "20%" : "0%",
          height: "100vh",
          backgroundColor: "yellow",
          borderLeftWidth: 1,
          borderLeftColor: "gray",
        }}
      >
        <p>ads</p>
      </div>
    </div>
  );
}
