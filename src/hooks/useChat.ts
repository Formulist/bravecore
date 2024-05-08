import { SessionDocument, SessionQuery } from "@/gql/GetSession.generated";
import { SubmitMessageDocument } from "@/gql/SendChat.generated";
import { gqlClient } from "@/gql/client";
import React from "react";
import { useImmer } from "use-immer";

type State = {
  messages: SessionQuery["session"]["messages"];
  isLoading: boolean;
  error: null | Error;
};
export const useChat = (
  sessionId: string,
  userId: string
): State & {
  sendChat: (message: string) => Promise<void>;
} => {
  const [state, setState] = useImmer<State>({
    messages: [],
    error: null,
    isLoading: false,
  });
  React.useEffect(() => {
    const getData = async () => {
      setState((draft) => {
        draft.isLoading = true;
        draft.error = null;
      });
      try {
        const data = await gqlClient(SessionDocument, { sessionId });
        setState((draft) => {
          draft.messages = data.session.messages;
          draft.isLoading = false;
          draft.error = null;
        });
      } catch (e) {
        setState((draft) => {
          draft.isLoading = false;
          draft.error = e as Error;
        });
      }
    };
    const timeout = window.setTimeout(() => getData(), 500);
    return () => window.clearTimeout(timeout);
  });
  return {
    ...state,
    sendChat: async (message: string) => {
      setState((draft) => {
        draft.isLoading = true;
        draft.error = null;
      });
      try {
        await gqlClient(SubmitMessageDocument, {
          anonomousUserId: userId,
          message,
          sessionId,
        });
      } catch (e) {
        setState((draft) => {
          draft.isLoading = false;
          draft.error = e as Error;
        });
      }
    },
  };
};
