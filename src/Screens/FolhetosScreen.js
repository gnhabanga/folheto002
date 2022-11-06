import React, { useState } from "react";
import Layout from "../Layout/Layout";
import Filters from "../Components/Home/Filters";
import Folheto from "../Components/Folheto";
import { Movies } from "../Data/MovieData";
import { CgSpinner } from "react-icons/cg";

function FolhetosScreen() {
  const maxpage = 5;
  const [page, setPage] = useState(maxpage);
  const HandleLoadingMore = () => {
    setPage(page + maxpage);
  };
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Filters />
        <p className="text-lg font-medium my-6">
          Total <span className="font-bold text-subMain">{Movies?.length}</span>{" "}
          itens encontrados
        </p>
        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {Movies.slice(0, page)?.map((folheto, index) => (
            <Folheto key={index} folheto={folheto} />
          ))}
        </div>
        {/* Carregar mais */}
        <div className="w-full flex-colo md:my-20 my-10">
          <button
            onClick={HandleLoadingMore}
            className="flex-rows gap-3 text-white py-3 px-3 rounded font-semibold border-2 border-subMain bg-border"
          >
            Loading More <CgSpinner className="animate-spin" />
          </button>
        </div>
      </div>
    </Layout>
  );
}
export default FolhetosScreen;
