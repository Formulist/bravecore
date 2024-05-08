import React from "react";
import styled from "styled-components";
import { SVG } from "./SVG";
import { sizes } from "@/app/styles/sizes";
import { Button } from "./Button";
import { Spacer } from "./Spacer";

type Actions = {
  label: string;
  onClick: () => void;
};

export const Header = (props: { actions?: Actions[] }) => {
  return (
    <Container>
      <SVG iconKey={SVG.Keys.Logo} />
      <Spacer width="fill" />
      {props.actions?.map((action) => (
        <Button key={action.label} onClick={action.onClick}>
          {action.label}
        </Button>
      ))}
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
