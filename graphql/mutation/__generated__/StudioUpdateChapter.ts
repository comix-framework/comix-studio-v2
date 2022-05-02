/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateChapterInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: StudioUpdateChapter
// ====================================================

export interface StudioUpdateChapter_studioUpdateChapter_content {
  __typename: "ChapterContent";
  id: string;
  storage: string;
  src: string;
}

export interface StudioUpdateChapter_studioUpdateChapter {
  __typename: "Chapter";
  id: string;
  content: StudioUpdateChapter_studioUpdateChapter_content[];
  avatar: string | null;
  slug: string;
  name: string;
}

export interface StudioUpdateChapter {
  studioUpdateChapter: StudioUpdateChapter_studioUpdateChapter;
}

export interface StudioUpdateChapterVariables {
  chapter: string;
  input: CreateChapterInput;
}
