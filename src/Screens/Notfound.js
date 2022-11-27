import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Notfound() {
  const navigate = useNavigate();
  return (
    <div className="flex-colo w-full gap-6 min-h-screen text-white bg-border lg:py-20 py-10 px-6">
      <img
        className="w-full h-96 object-contain"
        src={require("../assets/Na_Nov_26.jpg")}
        alt={"fghfhgfghf"}
      />
      <button onClick={() => navigate("/")}>Go back</button>
    </div>
  );
}

export default Notfound;
