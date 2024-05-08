"use client";
import React from "react";
import { Body } from "@/components/Body";
import { ChatMessage } from "@/components/ChatMessage";
import { Header } from "@/components/Header";
import { useChat } from "@/hooks/useChat";
import styled from "styled-components";
import { sizes } from "./styles/sizes";
import { Spacer } from "@/components/Spacer";
import { Agent2 } from "@/components/SVG/library/Agent2";
import { Input } from "@/components/Input";
import { usePageSession } from "@/hooks/usePageSession";

export default function Home() {
  const [draft, setDraft] = React.useState("");
  const { isLoading, sessionId, userId, createSession } = usePageSession();
  const { messages, sendChat } = useChat(sessionId, userId);

  const handleMessage = () => {
    sendChat(draft);
    setDraft("");
  };
  return (
    <Body
      Header={
        <Header actions={[{ label: "New Chat", onClick: createSession }]} />
      }
    >
      <Content>
        <ChatBody>
          {messages.map((message, index) => {
            const isAI = message.type === "AI";
            return (
              <Row
                key={message.text}
                isAgent={isAI}
                isLast={index === messages.length - 1}
              >
                {isAI ? (
                  <>
                    <Agent2 />
                    <Spacer width={3} />
                  </>
                ) : null}
                <ChatMessage value={message.text} type={message.type} />
                {isAI ? null : (
                  <>
                    <Spacer width={3} />
                    <img src="/photo.png" />
                  </>
                )}
              </Row>
            );
          })}
        </ChatBody>

        <Spacer height="fill" />
        <InputContainer>
          <Input value={draft} onChange={setDraft} onSubmit={handleMessage} />
        </InputContainer>
      </Content>
    </Body>
  );
}

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  align-items: center;
`;

const ChatBody = styled.div`
  max-width: 960px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 1 auto;
  align-self: center;
  overflow: auto;
`;

const Row = styled.div<{ isAgent: boolean; isLast: boolean }>`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: ${sizes[12]};
  ${({ isAgent }) => {
    if (isAgent) {
      return `
        justify-content: flex-start;
      `;
    }
  }}
`;
const InputContainer = styled.div`
  width: 80%;
`;
