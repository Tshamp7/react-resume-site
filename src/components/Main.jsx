import React from "react";
import backgroundOne from "../resources/images/pexels-bri-schneiter-346529.jpg";
import BootstrapCarousel from "./BootstrapCarousel";

const Main = () => {
  const topStyle = {
    width: "auto",
    height: "100vh",
    marginLeft: "300px",
    background: `url(${backgroundOne})`,
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
  };

  return (
    <div style={topStyle}>
      <BootstrapCarousel />
    </div>
  );
};

export default Main;
