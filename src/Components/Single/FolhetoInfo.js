import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}

function FolhetoInfo({ folheto }) {
  const [height, width] = useWindowSize();
  const { idcompany } = useParams();

  return (
    <>
      <div
        className="grid"
        style={{
          position: "relative",
          zIndex: 2,
          marginBottom: "1rem",
          display: "block",
        }}
      >
        <div
          className=""
          style={{
            marginBottom: ".7rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h1
            className="text-dry"
            style={{
              fontSize: "1.625rem",
              fontWeight: "700",
              lineHeight: "1.2",
            }}
          >
            {idcompany}
          </h1>
        </div>
        <div>
          {folheto.map((dado, index) => (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                position: "relative",
                zIndex: 3,
                width: width >= 1025 ? "70%" : "100%",
              }}
            >
              <div className="xl:mb-2 w-full">
                <div
                  className="mb-3 bg-white"
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 10%)",
                    display: "flex",
                  }}
                >
                  <div
                    class="store-flyer__front"
                    style={{
                      flexBasis: "10%",
                      flexGrow: 1,
                      flexShrink: 0,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <img
                      src={require(`../../assets/${dado.image}`)}
                      style={{
                        flex: "1 1 100%",
                        width: "100%",
                        height: "10%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        objectFit: "cover",
                      }}
                      alt={`Folheto valido ate ${dado?.validade}`}
                      title={`Folheto valido ate ${dado?.validade}`}
                    />
                  </div>
                  <div
                    class="store-flyer__info"
                    style={{
                      flexBasis: "60%",
                      flexShrink: 1,
                      flexGrow: 1,
                      margin: ".5rem",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h3 className="mb-3 text-border">{dado?.name} </h3>
                    <p
                      className=""
                      style={{
                        lineHeight: 1.25,
                        color: "#999",
                        marginBottom: "1.25rem",
                        display: "block",
                      }}
                    >
                      {dado?.validade}
                    </p>
                    <p
                      className="store-flyer__text mb-8 text-border"
                      style={{ fontSize: "1.0rem" }}
                    >
                      Este <b>Folheto MediaMarkt</b> preenchido com ofertas
                      ainda ?? v??lido durante <b>3</b> dia(s). Veja as ofertas
                      mais recentes da MediaMarkt e economiza em compras na
                      MediaMarkt.
                    </p>
                    <div
                      className="store-flyer__actions mt-2"
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div className="store-flyer__actions-left">
                        <Link
                          to={`/folheto/${idcompany}/${dado.name}/show`}
                          className="btn btn btn-lg btn-primary"
                          style={{
                            color: "#fff",
                            backgroundColor: "#ff661f",
                            borderColor: "#ff661f",
                            padding: "5px",
                            borderRadius: "50px",
                          }}
                        >
                          <span
                            className="btn-label"
                            style={{ padding: "5px" }}
                          >
                            Ver folheto
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FolhetoInfo;
