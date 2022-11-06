import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Movies } from "../Data/MovieData";
import FolhetoInfo from "../Components/Single/FolhetoInfo";

function SingleFolheto() {
  const { id } = useParams();
  const folheto = Movies.find((folheto) => folheto.name === id);

  return (
    <Layout>
      <div className="w-full container mx-auto mb-6 mt-10">
        <div>
          <FolhetoInfo folheto={folheto} />
        </div>
      </div>
    </Layout>
  );
}

export default SingleFolheto;
