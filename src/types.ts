export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export enum AgentKey {
  BrodieAgent = 'BrodieAgent',
  ProgramAgent = 'ProgramAgent'
}

export type AgentUser = {
  __typename?: 'AgentUser';
  agentKey: AgentKey;
};

export type Article = {
  __typename?: 'Article';
  id: Scalars['String']['output'];
  mediaChannelType: ProgramMediaChannelType;
  versions: Array<ArticleVersion>;
};

export type ArticleSection = {
  __typename?: 'ArticleSection';
  file: File;
  id: Scalars['String']['output'];
  pageEnd: Scalars['String']['output'];
  pageStart: Scalars['String']['output'];
  summary: Scalars['String']['output'];
  tags: Array<Tag>;
  title: Scalars['String']['output'];
};

export type ArticleVersion = {
  __typename?: 'ArticleVersion';
  authors: Array<MediaPerson>;
  externalUrl: Scalars['String']['output'];
  file: File;
  id: Scalars['String']['output'];
  publicationName: Scalars['String']['output'];
  publishedISODate: Scalars['String']['output'];
  publisherName: Scalars['String']['output'];
  referenceDocumentId: Scalars['String']['output'];
  sections: Array<ArticleSection>;
  summary: Scalars['String']['output'];
  title: Scalars['String']['output'];
  version: Scalars['String']['output'];
};

export type AuthResult = {
  __typename?: 'AuthResult';
  token: Scalars['String']['output'];
  user: User;
};

export type Blog = {
  __typename?: 'Blog';
  id: Scalars['String']['output'];
  mediaChannelType: ProgramMediaChannelType;
  postList: PaginatedBlogPosts;
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type BlogPost = {
  __typename?: 'BlogPost';
  authorName: Scalars['String']['output'];
  authorUrl?: Maybe<Scalars['String']['output']>;
  html: Scalars['String']['output'];
  id: Scalars['String']['output'];
  imageUrl: Scalars['String']['output'];
  isoDate: Scalars['String']['output'];
  link: Scalars['String']['output'];
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Book = {
  __typename?: 'Book';
  authors: Array<MediaPerson>;
  chapters: Array<BookChapter>;
  file: File;
  id: Scalars['String']['output'];
  mediaChannelType: ProgramMediaChannelType;
  referenceDocumentId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type BookChapter = {
  __typename?: 'BookChapter';
  chapterNumber: Scalars['Float']['output'];
  file: File;
  id: Scalars['String']['output'];
  summary: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ChatMember = AgentUser | User;

export type ChatMessage = {
  __typename?: 'ChatMessage';
  createdAtISO: Scalars['String']['output'];
  id: Scalars['String']['output'];
  references: Array<ChatReference>;
  status: ChatMessageStatus;
  text: Scalars['String']['output'];
  type: ChatMessageType;
  updatedAtISO: Scalars['String']['output'];
};

export enum ChatMessageStatus {
  Complete = 'Complete',
  Failed = 'Failed',
  InProgress = 'InProgress'
}

export enum ChatMessageType {
  Ai = 'AI',
  System = 'System',
  User = 'User'
}

export type ChatReference = {
  __typename?: 'ChatReference';
  mediaChannelId: Scalars['String']['output'];
  mediaChannelType: ProgramMediaChannelType;
  mediaItemId: Scalars['String']['output'];
  programId: Scalars['String']['output'];
};

export type ChatSession = {
  __typename?: 'ChatSession';
  createdAtISO: Scalars['String']['output'];
  createdBy?: Maybe<User>;
  createdById: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isUserAnonymous: Scalars['Boolean']['output'];
  mediaChannelId?: Maybe<Scalars['String']['output']>;
  memberIds: Array<Scalars['String']['output']>;
  members: Array<ChatMember>;
  messages: Array<ChatMessage>;
  programId: Scalars['String']['output'];
  updatedAtISO: Scalars['String']['output'];
};

export type ChatSessionResponse = {
  __typename?: 'ChatSessionResponse';
  hasMore: Scalars['Boolean']['output'];
  items: Array<ChatSession>;
  limit: Scalars['Int']['output'];
  start: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type File = {
  __typename?: 'File';
  /** The file extention such, ex: "mp3" */
  extention: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lengthMs: Scalars['String']['output'];
  /** The name of the file, ex: "audio", can be combined with extention to form the full system file name "audio.mp3" */
  name: Scalars['String']['output'];
  rssSrc: Scalars['String']['output'];
  src: Scalars['String']['output'];
  type: FileType;
};

export enum FileType {
  AudioMpeg = 'AudioMPEG',
  Pdf = 'PDF',
  Text = 'TEXT'
}

export type MediaPerson = {
  __typename?: 'MediaPerson';
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  organization: Scalars['String']['output'];
  twitterHandle: Scalars['String']['output'];
  websiteUrl: Scalars['String']['output'];
  wikipediaUrl: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAgentChatSession: ChatSession;
  createProgramChatSession: ChatSession;
  formulaCreateUberStory: Story;
  formulaCreateUberVideo: Story;
  login?: Maybe<AuthResult>;
  registerUser: AuthResult;
  sendMessageToAgent: ChatSession;
  submitMessage: ChatSession;
};


export type MutationCreateAgentChatSessionArgs = {
  agentKey: AgentKey;
  anonomousUserId?: InputMaybe<Scalars['String']['input']>;
  userMessage?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateProgramChatSessionArgs = {
  anonomousUserId?: InputMaybe<Scalars['String']['input']>;
  mediaChannelId?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  programId: Scalars['String']['input'];
};


export type MutationFormulaCreateUberStoryArgs = {
  narratorKey: NarratorKey;
  scenes: Array<SceneInput>;
};


export type MutationFormulaCreateUberVideoArgs = {
  narratorKey: NarratorKey;
  scenes: Array<SceneInput>;
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRegisterUserArgs = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationSendMessageToAgentArgs = {
  agentKey: AgentKey;
  anonomousUserId: Scalars['String']['input'];
  message: Scalars['String']['input'];
  sessionId: Scalars['String']['input'];
};


export type MutationSubmitMessageArgs = {
  anonomousUserId: Scalars['String']['input'];
  message: Scalars['String']['input'];
  sessionId: Scalars['String']['input'];
};

export type Narration = {
  __typename?: 'Narration';
  audioUrl: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

/** Narrator of a story */
export type Narrator = {
  __typename?: 'Narrator';
  key: NarratorKey;
};

export enum NarratorKey {
  CrisRock = 'CrisRock',
  JerrySeinfeld = 'JerrySeinfeld',
  SamuelLJackson = 'SamuelLJackson'
}

export type PaginatedBlogPosts = {
  __typename?: 'PaginatedBlogPosts';
  hasMore: Scalars['Boolean']['output'];
  items: Array<BlogPost>;
  limit: Scalars['Int']['output'];
  start: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginatedPodcastEpisodes = {
  __typename?: 'PaginatedPodcastEpisodes';
  hasMore: Scalars['Boolean']['output'];
  items: Array<PodcastEpisode>;
  limit: Scalars['Int']['output'];
  start: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationInput = {
  limit?: Scalars['Int']['input'];
  start: Scalars['Int']['input'];
};

export type Podcast = {
  __typename?: 'Podcast';
  description: Scalars['String']['output'];
  episodeList: PaginatedPodcastEpisodes;
  id: Scalars['String']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  mediaChannelType: ProgramMediaChannelType;
  rssUrl: Scalars['String']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};


export type PodcastEpisodeListArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

export type PodcastEpisode = {
  __typename?: 'PodcastEpisode';
  contentHTML: Scalars['String']['output'];
  description: Scalars['String']['output'];
  file: File;
  id: Scalars['String']['output'];
  isoDate: Scalars['String']['output'];
  keywords: Array<Scalars['String']['output']>;
  link: Scalars['String']['output'];
  people: Array<PodcastEpisodePerson>;
  publishedAtIso: Scalars['String']['output'];
  resourceUrls: Array<Scalars['String']['output']>;
  summary: Scalars['String']['output'];
  title: Scalars['String']['output'];
  topics: Array<Scalars['String']['output']>;
  transcript?: Maybe<Transcript>;
  transcriptUrl: Scalars['String']['output'];
};

export type PodcastEpisodePerson = {
  __typename?: 'PodcastEpisodePerson';
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  middleName: Scalars['String']['output'];
  type: ProgramMediaChannelType;
};

export type Program = {
  __typename?: 'Program';
  /** Articles */
  articles: Array<Article>;
  /** Blog, if empty no blog */
  blogs: Array<Blog>;
  /** Books, if empty no blog */
  books: Array<Book>;
  id: Scalars['String']['output'];
  onboardedAtISO: Scalars['String']['output'];
  /** Podcast, if empty no podcast */
  podcasts: Array<Podcast>;
  programKey: Scalars['String']['output'];
  tags: Array<Tag>;
  title: Scalars['String']['output'];
  updatedAtISO: Scalars['String']['output'];
  /** Websites */
  websites: Array<Website>;
};

/** Program media channel type */
export enum ProgramMediaChannelType {
  Article = 'Article',
  Blog = 'Blog',
  Book = 'Book',
  Podcast = 'Podcast',
  Website = 'Website'
}

export type Query = {
  __typename?: 'Query';
  me: User;
  program: Program;
  session: ChatSession;
  story: Story;
  user?: Maybe<User>;
  userSessions: ChatSessionResponse;
  users: Array<User>;
  validateToken: User;
};


export type QueryProgramArgs = {
  programId: Scalars['String']['input'];
};


export type QuerySessionArgs = {
  sessionId: Scalars['String']['input'];
};


export type QueryStoryArgs = {
  storyId: Scalars['String']['input'];
};


export type QueryUserArgs = {
  userId: Scalars['String']['input'];
};


export type QueryUserSessionsArgs = {
  anonomousUserId?: InputMaybe<Scalars['String']['input']>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryUsersArgs = {
  userIds: Array<Scalars['String']['input']>;
};


export type QueryValidateTokenArgs = {
  token: Scalars['String']['input'];
};

export type RecordingMetadata = {
  __typename?: 'RecordingMetadata';
  confidance: Scalars['Float']['output'];
  end: Scalars['Float']['output'];
  speaker?: Maybe<Scalars['Float']['output']>;
  speakerConfidance?: Maybe<Scalars['Float']['output']>;
  start: Scalars['Float']['output'];
};

/** A single sequence of events that is elaborated on the description and picture */
export type Scene = {
  __typename?: 'Scene';
  imageUrl: Scalars['String']['output'];
  narration: Narration;
  narrationId: Scalars['String']['output'];
  prompt: Scalars['String']['output'];
  script: Scalars['String']['output'];
};

export type SceneInput = {
  imageUrl: Scalars['String']['input'];
  prompt: Scalars['String']['input'];
};

export type Story = {
  __typename?: 'Story';
  id: Scalars['String']['output'];
  narrator: Narrator;
  scenes: Array<Scene>;
  status: StoryStatus;
  videoUrl?: Maybe<Scalars['String']['output']>;
};

export enum StoryStatus {
  Complete = 'COMPLETE',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS'
}

export type Tag = {
  __typename?: 'Tag';
  key: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Transcript = {
  __typename?: 'Transcript';
  channels: Scalars['Float']['output'];
  createdAtISO: Scalars['String']['output'];
  durationSec: Scalars['Float']['output'];
  modelArch: Scalars['String']['output'];
  modelId: Scalars['String']['output'];
  modelname: Scalars['String']['output'];
  requestId: Scalars['String']['output'];
  sha256: Scalars['String']['output'];
  utterances: Array<Utterance>;
  value: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
};

export type Utterance = {
  __typename?: 'Utterance';
  id: Scalars['String']['output'];
  recordingMetadata: RecordingMetadata;
  value: Scalars['String']['output'];
  words: Array<Word>;
};

export type Webpage = {
  __typename?: 'Webpage';
  html: Scalars['String']['output'];
  id: Scalars['String']['output'];
  link: Scalars['String']['output'];
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAtIsoDate: Scalars['String']['output'];
};

export type Website = {
  __typename?: 'Website';
  id: Scalars['String']['output'];
  mediaChannelType: ProgramMediaChannelType;
  pages: Array<Webpage>;
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Word = {
  __typename?: 'Word';
  punctuatedWord?: Maybe<Scalars['String']['output']>;
  recordingMetadata: RecordingMetadata;
  value: Scalars['String']['output'];
};
