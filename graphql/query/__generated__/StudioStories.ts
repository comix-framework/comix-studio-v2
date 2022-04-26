/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MyStoriesFilter, StoryStatus } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: StudioStories
// ====================================================

export interface StudioStories_studioStories {
  __typename: "Story";
  id: string;
  name: string;
  slug: string;
  avatar: string;
  status: StoryStatus;
  countViews: number;
  updatedAt: number;
}

export interface StudioStories {
  studioStories: StudioStories_studioStories[];
}

export interface StudioStoriesVariables {
  filter: MyStoriesFilter;
}
