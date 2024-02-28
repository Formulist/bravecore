import { sizes } from "@/app/styles/sizes";
import React from "react";
import styled from "styled-components";

export const Body = (
  props: React.PropsWithChildren<{
    Header?: JSX.Element;
  }>
): JSX.Element => {
  return (
    <Container>
      <>
        {props.Header ?? <div />}
        <Content>{props.children}</Content>
      </>
    </Container>
  );
};
const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1 0 auto;
  min-width: 0;
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  padding: ${sizes[3]};
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
