import gql from "graphql-tag";
import { userModel } from "../models/user";

export const usersQuery = gql`
  query getUsers {
    getUsers {
      success
      message
      count
      users {
        ${userModel}
      }
    }
  }
`;

export const userQuery = gql`
  query getUser($id: ID!) {
    getUser(id: $id) {
      success
      message
      user {
        ${userModel}
      }
    }
  }
`;
