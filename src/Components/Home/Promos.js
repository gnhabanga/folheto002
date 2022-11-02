import React from "react";
import { FiUser } from "react-icons/fi";

function Promos() {
  return (
    <div className="my-20 py-10 md:px-20 px-8 bg-black">
      <div className="lg:grid lg:grid-cols-2 lg:gap-10 items-center">
        <div className="flex lg:gap-10 gap-6 flex-col">
          <h1 className="xl:text-3xl text-xl capitalize font-sans font-medium xl:leading-relaxed">
            Subscreva-se <br /> Receba A Newsletter
          </h1>
          <p className="text-text text-sm xl:text-base leading-6 xl:leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex gap-4 md:text-lg text-sm">
            <div
              className="flex-rows bg-transparent text-subMain px-6 py-3 rounded font-bold"
              style={{ borderColor: "yellow-500", borderWidth: "1px" }}
            >
              <FiUser />
              {"  "} Subscrever
            </div>
            <div
              className="flex-colo gap-4 bg-black text-subMain px-6 py-3 rounded font-bold"
              style={{ borderColor: "yellow-500", borderWidth: "1px" }}
            >
              Ler Mais
            </div>
          </div>
        </div>
        <div>
          <img
            src={require("../../assets/homem_telefone.jpg")}
            className="w-full object-contain"
            alt="homem sentado com telefone na mao"
          />
        </div>
      </div>
    </div>
  );
}

export default Promos;
