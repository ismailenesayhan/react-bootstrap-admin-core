import React from "react";
import styled from "styled-components";

export default function PageTitle(props) {
  return (
    <>
      <Heading>{props.children}</Heading>
    </>
  );
}

const Heading = styled.h2`
  color: darkgoldenrod;
  text-align: center;
`;
