"use client";
import React from "react";
import { Body } from "@/components/Body";
import { ChatMessage } from "@/components/ChatMessage";
import { Header } from "@/components/Header";
import { SVG } from "@/components/SVG";
import { useChat } from "@/hooks/useChat";
import Image from "next/image";
import styled from "styled-components";
import { sizes } from "./styles/sizes";
import { Spacer } from "@/components/Spacer";
import { User } from "@/components/SVG/library/User";
import { Agent2 } from "@/components/SVG/library/Agent2";
import { Input } from "@/components/Input";

export default function Home() {
  const [draft, setDraft] = React.useState("");
  const { messages, sendChat } = useChat("65da766487105697f28888b9");

  const handleMessage = () => {
    sendChat(draft);
    setDraft("");
  };
  return (
    <Body Header={<Header />}>
      <Content>
        {messages.map((message) => {
          const isAI = message.type === "AI";
          return (
            <Row key={message.value} isAgent={isAI}>
              <ChatMessage value={message.value} type={message.type} />
              <Spacer width={3} />
              {isAI ? <Agent2 /> : <img src="/photo.png" />}
            </Row>
          );
        })}
        <Spacer height="fill" />
        <InputContainer>
          <Input value={draft} onChange={setDraft} onSubmit={handleMessage} />
        </InputContainer>
      </Content>
    </Body>
  );
}

const Content = styled.div`
  max-width: 960px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  align-self: center;
`;

const Row = styled.div<{ isAgent: boolean }>`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: ${sizes[12]};
  ${({ isAgent }) => {
    if (isAgent) {
      return `
        justify-content: space-between;
      `;
    }
  }}
`;
const InputContainer = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
`;
