import React from "react";
import SideBar from "./SideBar";
import Uploader from "../../Components/Uploader";

const Input = ({ placeholder, label, type, bg }) => {
  return (
    <div className="text-sm w-full">
      <label className="text-dry font-semibold">{label}:</label>
      <input
        required
        type={type}
        placeholder={placeholder}
        className={`w-full text-sm mt-2 p-4 border border-dry rounded text-white ${
          bg ? "bg-main" : "bg-border"
        }`}
      />
    </div>
  );
};

export default function Profile() {
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Profile</h2>
        <Uploader />
        <Input
          placeholder="Gladistone Nhabanga"
          type="text"
          label="FullName"
          bg={true}
        />
        <Input
          placeholder="gladistone.nhabanga@gmail.com"
          type="email"
          label="Email"
          bg={true}
        />
        <div className="flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4">
          <button className="bg-redy font-medium transitions hover:bg-main border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            Deletar Conta
          </button>
          <button className="bg-subMain font-medium transitions hover:bg-main border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            Actualizar Perfil
          </button>
        </div>
      </div>
    </SideBar>
  );
}
