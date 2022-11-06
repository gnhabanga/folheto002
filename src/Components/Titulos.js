import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function Titulos({ title, Icon, link }) {
  return (
    <div className="w-full flex sm:gap-8 gap-4 items-center">
      <Icon className="sm:w-6 sm:h-6 w-4 h-4 text-subMain" />
      <h2 className="sm:text-xl font-bold text-lg text-main">{title}</h2>
      <div>
        <Link
          to={`/${link}`}
          className="sm:w-4 sm:h-4 w-2 h-2 text-subMain m-auto"
        >
          <BsChevronRight size={20} />
        </Link>
      </div>
    </div>
  );
}

export default Titulos;
