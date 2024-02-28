import React from "react";
import styled from "styled-components";
import { SVG } from "./SVG";
import { sizes } from "@/app/styles/sizes";

export const Header = () => {
  return (
    <Container>
      <SVG iconKey={SVG.Keys.Logo} />
    </Container>
  );
};

const Container = styled.div`
  border-bottom: 1px solid #e5e8eb;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: ${sizes[3]} ${sizes[10]};
  width: 100%;
`;
