import React from "react";
import Layout from "../Layout/Layout";

export const Input = ({ placeholder, label, type, bg }) => {
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

export default function Login() {
  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <div className="w-full md:w-3/5 flex-colo p-14 2xl:w-2/5 bg-border rounded-lg border border-dry">
          <img
            src={require("../assets/logo.png")}
            alt="logo"
            className="w-full h-12 object-contain"
          />
          <Input
            placeholder="gladistone.nhabanga@gmail.com"
            type="email"
            label="Email"
            bg={true}
          />
        </div>
      </div>
    </Layout>
  );
}
