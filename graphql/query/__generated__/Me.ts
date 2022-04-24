/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Role } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: Me
// ====================================================

export interface Me_me {
  __typename: "User";
  id: string;
  name: string;
  avatar: string | null;
  email: string;
  slug: string;
  role: Role;
}

export interface Me {
  me: Me_me;
}
