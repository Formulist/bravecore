import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

export const Input = (props: {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}) => {
  return (
    <Container>
      <TextInput
        placeholder="Type your message..."
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        onKeyUp={(e) => e.key === "Enter" && props.onSubmit()}
      />
      <Button onClick={props.onSubmit}>Send</Button>
    </Container>
  );
};

const Container = styled.div`
  height: 48px;
  padding: 0px 8px 0px 16px;
  border-radius: 24px;
  background: #3d175e;
  border-width: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const TextInput = styled.input`
  height: 48px;
  flex: 1 0 auto;
  padding: 0px 8px 0px 16px;
  border-radius: 24px;
  background: #3d175e;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  border-width: 0;
  min-width: 0;
  font-size: 16px;
  flex: 1 0 auto;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #b07dde;
  }
`;
