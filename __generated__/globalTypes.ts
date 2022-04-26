/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum Role {
  Admin = "Admin",
  User = "User",
}

export enum StoriesSort {
  CREATED_AT = "CREATED_AT",
}

export enum StoryStatus {
  DROP = "DROP",
  END = "END",
  ON_GOING = "ON_GOING",
}

export interface MyStoriesFilter {
  sort: StoriesSort;
  page: number;
  limit: number;
}

export interface SignInTdo {
  email: string;
  password: string;
}

export interface SignUpTdo {
  email: string;
  password: string;
  name: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
