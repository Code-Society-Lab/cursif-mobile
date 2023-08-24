/* eslint-disable */
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

/** Macro representation */
export type Macro = {
  __typename?: 'Macro';
  code?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pattern?: Maybe<Scalars['String']['output']>;
};

/** Notebook representation */
export type Notebook = {
  __typename?: 'Notebook';
  collaborators?: Maybe<Array<Maybe<PartialUser>>>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  macros?: Maybe<Array<Maybe<Macro>>>;
  owner?: Maybe<Owner>;
  ownerId?: Maybe<Scalars['ID']['output']>;
  ownerType?: Maybe<Scalars['String']['output']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Owner = PartialUser;

export type Page = {
  __typename?: 'Page';
  author?: Maybe<User>;
  children?: Maybe<Array<Maybe<Page>>>;
  content?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  parent?: Maybe<Parent>;
  parentId?: Maybe<Scalars['ID']['output']>;
  parentType?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Parent = Notebook | Page;

/** Represents a partial user */
export type PartialUser = {
  __typename?: 'PartialUser';
  id?: Maybe<Scalars['ID']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type RootMutationType = {
  __typename?: 'RootMutationType';
  /** Create a macro */
  createMacro?: Maybe<Macro>;
  /** Create a notebook */
  createNotebook?: Maybe<Notebook>;
  createPage?: Maybe<Page>;
  /** Delete an macro */
  deleteMacro?: Maybe<Macro>;
  /** Delete an notebook */
  deleteNotebook?: Maybe<Notebook>;
  /** Login with the params */
  login?: Maybe<Session>;
  /** Create a user */
  register?: Maybe<User>;
  /** Update an macro */
  updateMacro?: Maybe<Macro>;
  /** Update a notebook */
  updateNotebook?: Maybe<Notebook>;
  updatePage?: Maybe<Page>;
  /** Update a user */
  updateUser?: Maybe<User>;
};


export type RootMutationTypeCreateMacroArgs = {
  code: Scalars['String']['input'];
  notebookId: Scalars['ID']['input'];
  pattern: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type RootMutationTypeCreateNotebookArgs = {
  description: Scalars['String']['input'];
  ownerId: Scalars['ID']['input'];
  ownerType: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type RootMutationTypeCreatePageArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  parentId: Scalars['ID']['input'];
  parentType: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type RootMutationTypeDeleteMacroArgs = {
  id: Scalars['ID']['input'];
};


export type RootMutationTypeDeleteNotebookArgs = {
  id: Scalars['ID']['input'];
};


export type RootMutationTypeLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type RootMutationTypeRegisterArgs = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type RootMutationTypeUpdateMacroArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  pattern?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type RootMutationTypeUpdateNotebookArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  ownerId?: InputMaybe<Scalars['ID']['input']>;
  ownerType?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type RootMutationTypeUpdatePageArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
  parentType?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type RootMutationTypeUpdateUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  /** Get a macro by id */
  macro?: Maybe<Macro>;
  /** Get the list of macros */
  macros?: Maybe<Array<Maybe<Macro>>>;
  me?: Maybe<User>;
  /** Get a notebook by id */
  notebook?: Maybe<Notebook>;
  /** Get the list of notebooks */
  notebooks?: Maybe<Array<Maybe<Notebook>>>;
  /** Get a specific page by id */
  page?: Maybe<Page>;
  user?: Maybe<PartialUser>;
  /** Get a list of users */
  users?: Maybe<Array<Maybe<PartialUser>>>;
};


export type RootQueryTypeMacroArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryTypeNotebookArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryTypePageArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryTypeUserArgs = {
  id: Scalars['ID']['input'];
};

/** Represents a session */
export type Session = {
  __typename?: 'Session';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

/** Represents a user */
export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};
