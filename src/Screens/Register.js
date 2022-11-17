import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import { FiLogIn } from "react-icons/fi";

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

export default function Register() {
  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <div className="w-full 2xl:w-2/5 md:w-2/5 gap-8 flex-colo p-14 bg-border rounded-lg border border-dry">
          <img
            src={require("../assets/logo.png")}
            alt="logo"
            className="w-full h-12 object-contain"
          />
          <Input
            placeholder="Gladistone Nhabanga"
            type="username"
            label="Username"
            bg={true}
          />
          <Input
            placeholder="gladistone.nhabanga@gmail.com"
            type="email"
            label="Email"
            bg={true}
          />
          <Input
            placeholder="***********"
            type="password"
            label="Password"
            bg={true}
          />
          <Link
            to="/dashboard"
            className="bg-dry transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
          >
            <FiLogIn /> Sign Up
          </Link>
          <p className="text-center text-dry">
            Ja tem uma conta?{" "}
            <Link to="/login" className="text-dryGray font-semibold ml-2">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
