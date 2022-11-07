import React from "react";
import Titulos from "../Titulos";
import { BsEmojiSmile } from "react-icons/bs";
import Folheto from "../Folheto";
import { Movies } from "../../Data/MovieData";

function NovosFolhetos() {
  return (
    <div className="my-16">
      <Titulos title="🔥 Em Alta" Icon={BsEmojiSmile} link={"new-ones"} />
      <div className="grid sm:mt-12 mt-6 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-10">
        {Movies.slice(0, 8).map((folheto, index) =>
          folheto.companies.map((dado, ind) => (
            <Folheto key={ind} folheto={dado} />
          ))
        )}
      </div>
    </div>
  );
}

export default NovosFolhetos;
