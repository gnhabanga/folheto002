import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const Links = [
    {
      title: "Company",
      links: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "Folhetos",
          link: "/new-ones",
        },
        {
          name: "Login",
          link: "*",
        },
        {
          name: "Favoritos",
          link: "*",
        },
        {
          name: "About us",
          link: "/about-us",
        },
        {
          name: "Contact us",
          link: "/contact-us",
        },
      ],
    },
    {
      title: "Top Categories",
      links: [
        {
          name: "Novos",
          link: "#",
        },
        {
          name: "Novos2",
          link: "#",
        },
        {
          name: "Novos3",
          link: "#",
        },
      ],
    },
    {
      title: "My Account",
      links: [
        {
          name: "Dashboard",
          link: "/dashboard",
        },
        {
          name: "My Favorites",
          link: "/favorite",
        },
        {
          name: "Profile",
          link: "/profile",
        },
        {
          name: "Change Password",
          link: "/password",
        },
      ],
    },
  ];

  return (
    <>
      <div className=" py-4 bg-border">
        <div className="container mx-auto px-2">
          <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-6 gap-2 sm:gap-9 lg:gap-7 xl:gap-7 py-10 justify-between">
            {Links.map((link, index) => (
              <div
                key={index}
                className="col-span-1 md:col-span-2 lg:col-span-1 pb-3.5 sm:pb-0"
              >
                <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                  {link.title}
                </h3>
                <ul className="text-sm flex flex-col space-y-3">
                  {link.links.map((text, index) => (
                    <li key={index} className="flex items-baseline">
                      <Link
                        to={text.link}
                        className="text-dry inline-block w-full hover:text-subMain"
                      >
                        {text.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:coll-span-3 ">
              <Link to="/">
                <img
                  src="https://img.offers-cdn.net/build/folderz3/20221021121210-568546/assets/frontend/build/assets/logos/pt/logo.svg"
                  alt="logo"
                  className="w-4/6 object-contain h-12"
                />
              </Link>
              <p className="leading-7 text-sm text-dry mt-3">
                <span>
                  Lorem 196 Andrew Road, Suit 200, <br /> New York, NY 10007
                </span>
                <br />
                <span>Tell: +258 85 27 15 683</span>
                <br />
                <span>E-mail: info@folhetosmagicos.co.mz</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-500 w-full m-auto items-center text-center">
        <p className="text-dry">
          Todos os direitos reservados © Gladistone Nhabanga 2022 |{" "}
          <Link>Aviso</Link> | <Link>Termos e Condições</Link> |{" "}
          <Link>Política de privacidade</Link>
        </p>
      </div>
    </>
  );
}
export default Footer;
