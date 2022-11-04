import React, { useState } from "react";
import Layout from "../Layout/Layout";
import Filters from "../Components/Home/Filters";

function FolhetosScreen() {
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Filters />
      </div>
    </Layout>
  );
}
export default FolhetosScreen;
