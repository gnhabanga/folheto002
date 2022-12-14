import React, { useState } from "react";
import Titles from "./../Titulos";
import {
  BsBookmarkStarFill,
  BsCaretLeftFill,
  BsCaretRightFill,
} from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { Movies } from "../../Data/MovieData";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Stars from "../Stars";

function MaisPopulares() {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  const classNames =
    "hover:bg-dry transitions text-sm rounded w-8 h-8 flex flex-colo bg-dry text-white";
  return (
    <div className="my-16">
      <Titles title="Mais Populares" Icon={BsBookmarkStarFill} />
      <div className="mt-10">
        <Swiper
          navigation={{ nextEl, prevEl }}
          slidesPerView={4}
          spaceBetween={40}
          autoplay={true}
          speed={1000}
          loop={true}
          modules={[Navigation, Autoplay]}
        >
          {Movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 h-rate hovered  rounded-lg overflow-hidden">
                <img
                  src={require(`../../assets/${movie.image}`)}
                  alt={movie.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="px-4 hoveres gap-6 text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0">
                  <button className="w-12 h-12 flex flex-colo transitions hover:bg-black rounded-full bg-white bg-opacity-30 text-white">
                    <FaHeart />
                  </button>
                  <Link
                    className="font-semibold text-xl truncated line-clamp-2"
                    to={`/folheto/${movie?.name}`}
                  >
                    {movie.name}
                  </Link>
                  <Link
                    className="font-semibold text-xl truncated line-clamp-2"
                    to={`/folheto/${movie?.name}`}
                  >
                    {movie.validade}
                  </Link>
                  <div className="flex gap2 text-yellow-400">
                    <Stars value={movie.rating} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full px-1 flex flex-rows gap-6 pt-12">
          <button className={classNames} ref={(node) => setPrevEl(node)}>
            <BsCaretLeftFill />
          </button>
          <button className={classNames} ref={(node) => setNextEl(node)}>
            <BsCaretRightFill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MaisPopulares;
