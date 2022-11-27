import React from "react";
import SideBar from "./SideBar";
import Table from "../../Components/Table";
import { User } from "../../Data/UserData";

export default function FavoriteMovies() {
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Folhetos Favoritos</h2>
          <button className="bg-subMain font-medium transitions hover:bg-main border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            Tirar todos Favoritos
          </button>
        </div>
        <Table data={User} admin={false} />
      </div>
    </SideBar>
  );
}
