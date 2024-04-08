import * as Types from '../types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type SessionQueryVariables = Types.Exact<{
  sessionId: Types.Scalars['String']['input'];
}>;


export type SessionQuery = { __typename?: 'Query', session: { __typename?: 'ChatSession', id: string, createdById: string, messages: Array<{ __typename?: 'ChatMessage', text: string, type: Types.ChatMessageType, status: Types.ChatMessageStatus, references: Array<{ __typename?: 'ChatReference', mediaItemTitle: string, mediaItemDescription: string, programId: string, mediaItemId: string, mediaChannelId: string, mediaChannel: Types.ProgramMediaChannelType, mediaSourceUrl: string }> }> } };


export const SessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Session"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sessionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"session"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sessionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sessionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdById"}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"references"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mediaItemTitle"}},{"kind":"Field","name":{"kind":"Name","value":"mediaItemDescription"}},{"kind":"Field","name":{"kind":"Name","value":"programId"}},{"kind":"Field","name":{"kind":"Name","value":"mediaItemId"}},{"kind":"Field","name":{"kind":"Name","value":"mediaChannelId"}},{"kind":"Field","name":{"kind":"Name","value":"mediaChannel"}},{"kind":"Field","name":{"kind":"Name","value":"mediaSourceUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<SessionQuery, SessionQueryVariables>;