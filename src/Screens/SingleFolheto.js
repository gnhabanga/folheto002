import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Movies } from "../Data/MovieData";

function SingleFolheto() {
  const { id } = useParams();
  const folheto = Movies.find((folheto) => folheto.name === id);

  return (
    <Layout>
      <h1>{folheto.name}</h1>
    </Layout>
  );
}

export default SingleFolheto;
