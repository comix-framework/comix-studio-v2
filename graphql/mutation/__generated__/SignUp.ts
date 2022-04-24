/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SignUpTdo } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: SignUp
// ====================================================

export interface SignUp_signUp {
  __typename: "Token";
  /**
   * JSON Web Token
   */
  token: string;
}

export interface SignUp {
  signUp: SignUp_signUp;
}

export interface SignUpVariables {
  input: SignUpTdo;
}
