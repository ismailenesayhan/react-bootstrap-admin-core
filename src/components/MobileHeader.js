import React from "react";

import Logo from "../assets/logo.svg";

export default function MobileHeader(props) {

  return (
    <>
      <div>
        <div className="text-center">
          <img src={Logo} alt="Logo" className="mt-3 mobileLogo" />
          <div className="mt-3 px-3 py-2 bg-white rounded-lg shadow-sm">
            <h6 className="mb-0">E-Seller Assist 21</h6>
          </div>
        </div>
      </div>
    </>
  );
}


