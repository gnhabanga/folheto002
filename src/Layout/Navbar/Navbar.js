import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaHeart, FaHome } from "react-icons/fa";
import { CgUser } from "react-icons/cg";

function Navbar() {
  const hover = "hover:text-subMain transitions text-white";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);
  return (
    <>
      <div className=" shadow-md sticky top-0 z-20 bg-border">
        <div className="container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">
          <div className="col-span-1 lg:block hidden">
            <Link to="/">
              <img
                src="https://img.offers-cdn.net/build/folderz4/20221118121242-674943/assets/frontend/build/assets/logos/pt/logo.svg"
                class="navbar_logo"
                alt="logo"
              />
            </Link>
          </div>
          {/* Search Form */}
          <div className="col-span-3">
            <form
              className="w-full text-sm bg-dryGray flex-btn gap-4"
              style={{ borderRadius: "50px" }}
            >
              <button
                type="submit"
                className="bg-yellow-500 w-12 flex-colo h-12 text-white"
                style={{
                  borderTopLeftRadius: "25px",
                  borderBottomLeftRadius: "25px",
                }}
              >
                <FaSearch size={20} />
              </button>
              <input
                type="text"
                placeholder="Pesquise Aqui..."
                className="font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black"
              />
            </form>
          </div>
          {/* menus */}
          <div className="bold col-span-3 font-medium text-sm hidden xl:gap-9 2xl:gap-11 justify-between lg:flex xl:justify-end items-center">
            <NavLink to="/" className={Hover}>
              <FaHome className="w-5 h-5" />
            </NavLink>
            <NavLink to="/new-ones" className={Hover}>
              <p className="bold" style={{ fontWeight: "bold" }}>
                ???? Novos folhetos
              </p>
            </NavLink>
            <NavLink to="/about-us" className={Hover}>
              <p className="bold" style={{ fontWeight: "bold" }}>
                Sobre
              </p>
            </NavLink>
            <NavLink to="/contact-us" className={Hover}>
              <p className="bold" style={{ fontWeight: "bold" }}>
                Contactar
              </p>
            </NavLink>
            <NavLink to="/login" className={Hover}>
              <CgUser className="w-8 h-8" />
            </NavLink>
            <NavLink to="/favorite" className={`${Hover} relative`}>
              <FaHeart className="w-6 h-6" />
              <div className="w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-5 -right-1">
                3
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
