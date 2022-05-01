/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: StudioChapter
// ====================================================

export interface StudioChapter_studioChapter_story {
  __typename: "Story";
  id: string;
  name: string;
  slug: string;
  avatar: string;
}

export interface StudioChapter_studioChapter_content {
  __typename: "ChapterContent";
  id: string;
  src: string;
  storage: string;
}

export interface StudioChapter_studioChapter {
  __typename: "Chapter";
  id: string;
  name: string;
  slug: string;
  story: StudioChapter_studioChapter_story;
  avatar: string | null;
  content: StudioChapter_studioChapter_content[];
  countViews: number;
  countComments: number;
  order: number;
  createdAt: number;
}

export interface StudioChapter {
  studioChapter: StudioChapter_studioChapter;
}

export interface StudioChapterVariables {
  chapter: string;
}
