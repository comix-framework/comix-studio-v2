/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { StoryStatus } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: StudioStoryChapters
// ====================================================

export interface StudioStoryChapters_studioStory {
  __typename: "Story";
  id: string;
  name: string;
  slug: string;
  avatar: string;
  content: string;
  authors: string;
  teams: string;
  status: StoryStatus;
  countViews: number;
  updatedAt: number;
  countRating: number;
}

export interface StudioStoryChapters_studioChapters {
  __typename: "Chapter";
  id: string;
  name: string;
  slug: string;
  avatar: string | null;
  countViews: number;
  countComments: number;
  createdAt: number;
}

export interface StudioStoryChapters {
  studioStory: StudioStoryChapters_studioStory;
  studioChapters: StudioStoryChapters_studioChapters[];
}

export interface StudioStoryChaptersVariables {
  story: string;
}
