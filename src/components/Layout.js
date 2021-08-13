import React, { useState, useEffect } from "react";

import DesktopMenu from "../components/DesktopMenu";
import MobileHeader from "./MobileHeader";
import MobileTabBar from "../components/MobileTabBar";



const PublicLayout = ({ children }) => {

  const [windowDimension, setWindowDimension] = useState(null);
  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 768;


  return (
    <>
      <div className="container container-xl">
        <div className="row pb-4">
          {isMobile ? <MobileHeader /> : <DesktopMenu />}
          <div className="col-md-9 col-lg-10 px-3 pt-3 pb-5 px-xl-5 mt-3">
            {children}
          </div>
        </div>
      </div>
      {isMobile ? <MobileTabBar /> : ""}
    </>
  );
};

export default PublicLayout;

