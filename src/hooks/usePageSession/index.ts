import { gqlClient } from "@/gql/client";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";
import { useImmer } from "use-immer";
import { CreateChatSessionDocument } from "./CreateChatSession.generated";
import { CheckSessionDocument } from "./CheckSession.generated";

export const usePageSession = (args?: {
  onSessionReset: (sessionId: string, userId: string) => void;
}): {
  isLoading: boolean;
  sessionId: string;
  userId: string;
  error?: Error;
  createSession: () => Promise<void>;
} => {
  const searchParams = useSearchParams();
  const [state, dispatch] = useImmer<{
    sessionId: string;
    userId: string;
    error?: Error;
    isLoading: boolean;
  }>({
    sessionId: "",
    userId: "",
    isLoading: false,
    error: undefined,
  });
  const createSession = async () => {
    const res = await gqlClient(CreateChatSessionDocument, {
      programId: "65d526bd844fb8f01b974ea0",
    });
    const { id, createdById } = res.createProgramChatSession;
    dispatch((draft) => {
      draft.sessionId = id;
      draft.userId = createdById;
    });
  };

  React.useEffect(() => {
    const handleSessionCreate = async (): Promise<void> => {
      const nextSessionId = searchParams.get("session-id") ?? "";
      const nextUserId = searchParams.get("user-id") ?? "";
      if (!nextSessionId || !nextUserId) {
        await createSession();
        return;
      }
      try {
        await gqlClient(CheckSessionDocument, {
          sessionId: nextSessionId,
        });

        dispatch((draft) => {
          draft.sessionId = nextSessionId;
          draft.userId = nextUserId;
        });
      } catch (e: any) {
        await createSession();
      }
    };
    handleSessionCreate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    isLoading: state.isLoading,
    sessionId: state.sessionId,
    error: state.error,
    userId: state.userId,
    createSession: async (): Promise<void> => {
      await createSession();
    },
  };
};
