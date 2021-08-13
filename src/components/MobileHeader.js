import React
// , { useState } 
from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";

import Logo from "../assets/logo.svg";

export default function MobileHeader(props) {
  // const [isOpen, setIsOpen] = useState(false);

  // function handleMenuChance(e) {
  //   if (e) {
  //     setIsOpen(true);
  //   } else {
  //     setIsOpen(false);
  //   }
  // }

  return (
    <>
      <div>
        <div className="text-center">
          <img src={Logo} alt="Logo" className="mt-3 mobileLogo" />
          <div className="mt-3 px-3 py-2 bg-white rounded-lg shadow-sm">
            <h6 className="mb-0">E-Seller Assist 21</h6>
          </div>
        </div>

        <nav className="nav mobileNavBar">
          <Link to="/" className="nav-link">
            Dashboard
          </Link>
          <Link to="/" className="nav-link">
            Dashboard
          </Link>
          <Link to="/" className="nav-link">
            Dashboard
          </Link>
        </nav>
      </div>
    </>
  );
}


