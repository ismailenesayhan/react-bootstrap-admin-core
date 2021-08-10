import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./styles/global";
import "bootstrap/dist/css/bootstrap.min.css";

import PageTitle from "./components/page-title";

export default function App() {
  return (
    <>
      <Body className="d-flex justify-content-center align-items-center vh-100">
        <PageTitle>Bu Sayfayı Çok Sevdim</PageTitle>
      </Body>
      <GlobalStyle />
    </>
  );
}

const Body = styled.div`
  background-color: beige;
`;

