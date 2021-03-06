/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { StoryStatus } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: StudioStory
// ====================================================

export interface StudioStory_studioStory {
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

export interface StudioStory {
  studioStory: StudioStory_studioStory;
}

export interface StudioStoryVariables {
  story: string;
}
