import React, { useEffect, useState } from "react";
import Banner from "../Components/Home/Banner";
import FolhetosPopulares from "../Components/Home/FolhetosPopulares";
import MaisPopulares from "../Components/Home/MaisPopulares";
import NovosFolhetos from "../Components/Home/NovosFolhetos";
import NovosFolhetosMokup from "../Components/Home/NovosFolhetosMokup";
import Promos from "../Components/Home/Promos";
import Layout from "../Layout/Layout";

function HomeScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      {loading ? (
        <div className="flex flex-rows w-full">
          <div className="border border-border p-1 transitions relative rounded overflow-hidden">
            <div className="w-full h-64"></div>
            <div className="absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3"></div>
          </div>
          <div className="border border-border p-1 transitions relative rounded overflow-hidden">
            <div className="w-full h-64"></div>
            <div className="absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3"></div>
          </div>
          <div className="border border-border p-1 transitions relative rounded overflow-hidden">
            <div className="w-full h-64"></div>
            <div className="absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3"></div>
          </div>
          <div className="border border-border p-1 transitions relative rounded overflow-hidden">
            <div className="w-full h-64"></div>
            <div className="absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3"></div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto min-h-screen px-2 mb-6">
          <NovosFolhetos />
          <FolhetosPopulares />
          <Promos />
          <MaisPopulares />
        </div>
      )}
    </Layout>
  );
}
export default HomeScreen;
