/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateChapterInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: StudioPublishChapter
// ====================================================

export interface StudioPublishChapter_studioPublishChapter_content {
  __typename: "ChapterContent";
  id: string;
  src: string;
  storage: string;
}

export interface StudioPublishChapter_studioPublishChapter {
  __typename: "Chapter";
  id: string;
  name: string;
  slug: string;
  avatar: string | null;
  content: StudioPublishChapter_studioPublishChapter_content[];
}

export interface StudioPublishChapter {
  studioPublishChapter: StudioPublishChapter_studioPublishChapter;
}

export interface StudioPublishChapterVariables {
  input: CreateChapterInput;
  story: string;
}
