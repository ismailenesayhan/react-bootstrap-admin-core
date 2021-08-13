import React from "react";
import styled from "styled-components";

export default function PageTitle(props) {
  return (
    <>
      <div>
        <Heading>{props.title}</Heading>
        <Desc>{props.desc}</Desc>
      </div>
      <Heading>{props.children}</Heading>
    </>
  );
}

const Heading = styled.h1`
`;

const Desc = styled.p`
 margin-bottom: 0;
`;
