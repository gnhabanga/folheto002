import React from "react";
import SideBar from "./SideBar";

export default function Password() {
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

  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Mudar Palavra-Passe</h2>

        <Input
          placeholder="**********"
          type="password"
          label="Antiga Palavra-Passe"
          bg={true}
        />
        <Input
          placeholder="***********"
          type="password"
          label="Nova Palavra-Passe"
          bg={true}
        />
        <Input
          placeholder="***********"
          type="password"
          label="Confirmar Palavra-Passe"
          bg={true}
        />
        <div className="flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4">
          <button className="bg-subMain font-medium transitions hover:bg-main border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            Actualizar Palavra-Passe
          </button>
        </div>
      </div>
    </SideBar>
  );
}
