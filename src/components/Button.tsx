import { colors } from "@/app/styles/colors";
import React from "react";
import styled from "styled-components";

export const Button = (props: { children: string; onClick: () => void }) => {
  return <Container onClick={props.onClick}>{props.children}</Container>;
};

const Container = styled.button`
  border-radius: 16px;
  background: #a13dff;
  height: 32px;
  padding: 0px 16px;
  color: ${colors.text.primary};
  border: 0px solid;
`;
