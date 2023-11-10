/* eslint-disable */ /**
 *
 * THIS FILE IS AUTOGENERATED, DO NOT EDIT IT!
 *
 * instead, edit one of the `.graphql` files in this project and run
 *
 * npm run graphql-codegen
 *
 * for this file to be re-created
 */

import * as Types from '../app/services/types.generated';

import { api } from './../app/TaskApi';
// module.hot?.accept();
export type DeleteTaskMutationVariables = Types.Exact<{
  input: Types.DeleteTaskInput;
}>;


export type DeleteTaskMutation = { __typename?: 'Mutation', deleteTask?: { __typename: 'Task', id: string, title: string, description?: string } };


export const DeleteTaskDocument = `
    mutation DeleteTask($input: DeleteTaskInput!) {
  deleteTask(input: $input) {
    id
    title
    description
    __typename
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  // overrideExisting: module.hot?.status() === "apply",
  endpoints: (build) => ({
    DeleteTask: build.mutation<DeleteTaskMutation, DeleteTaskMutationVariables>({
      query: (variables) => ({ document: DeleteTaskDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useDeleteTaskMutation } = injectedRtkApi;

