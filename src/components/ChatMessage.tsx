import { colors } from "@/app/styles/colors";
import { sizes } from "@/app/styles/sizes";
import { text } from "@/app/styles/text";
import React from "react";
import styled from "styled-components";
import Markdown from "react-markdown";

type Props = { value: string; type: string };

export const ChatMessage = ({ value, type }: Props) => {
  return (
    <Container type={type}>
      <Markdown>{value}</Markdown>
    </Container>
  );
};

const Container = styled.div<{
  type: Props["type"];
}>`
  max-width: 400px;
  font-size: ${text.fontSize.base};
  line-height: ${text.lineHeight.relaxed};
  font-weight: 400;
  border-radius: 12px;
  padding: ${sizes[4]};
  ${({ type }) => {
    switch (type) {
      case "User":
        return `
          background-color: ${colors.background.quaternary};
          align-self: flex-end;
        `;
      case "AI":
        return `
          background-color: ${colors.background.tertiary};
          align-self: flex-start;
        `;
    }
  }}
`;
