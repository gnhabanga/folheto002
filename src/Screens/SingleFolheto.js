import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Movies } from "../Data/MovieData";
import FolhetoInfo from "../Components/Single/FolhetoInfo";

function SingleFolheto() {
  const { idcompany } = useParams();
  var folhetoo = "";

  return (
    <Layout>
      {Movies.map((folhetos, index) =>
        folhetos.companies.map((dado, ind) => {
          if (dado.name === idcompany) {
            folhetoo = dado.movies;
          }
        })
      )}
      <div className="w-full container mx-auto mb-6 mt-10">
        <div>
          <FolhetoInfo folheto={folhetoo} />
        </div>
      </div>
    </Layout>
  );
}

export default SingleFolheto;
