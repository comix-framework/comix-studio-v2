/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SignInTdo } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: SignIn
// ====================================================

export interface SignIn_signIn {
  __typename: "Token";
  /**
   * JSON Web Token
   */
  token: string;
}

export interface SignIn {
  signIn: SignIn_signIn;
}

export interface SignInVariables {
  input: SignInTdo;
}
