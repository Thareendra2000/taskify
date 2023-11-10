/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTaskInput = {
  title: string,
  description?: string | null,
};

export type Task = {
  __typename: "Task",
  id: string,
  title: string,
  description?: string | null,
};

export type UpdateTaskInput = {
  id: string,
  title: string,
  description?: string | null,
};

export type DeleteTaskInput = {
  id: string,
  title: string,
};

export type TaskConnection = {
  __typename: "TaskConnection",
  items?:  Array<Task | null > | null,
  nextToken?: string | null,
};

export type CreateTaskMutationVariables = {
  input: CreateTaskInput,
};

export type CreateTaskMutation = {
  createTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
  } | null,
};

export type UpdateTaskMutationVariables = {
  input: UpdateTaskInput,
};

export type UpdateTaskMutation = {
  updateTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
  } | null,
};

export type DeleteTaskMutationVariables = {
  input: DeleteTaskInput,
};

export type DeleteTaskMutation = {
  deleteTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
  } | null,
};

export type GetTaskQueryVariables = {
  id: string,
};

export type GetTaskQuery = {
  getTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
  } | null,
};

export type ListTasksQueryVariables = {
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTasksQuery = {
  listTasks?:  {
    __typename: "TaskConnection",
    items?:  Array< {
      __typename: "Task",
      id: string,
      title: string,
      description?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAllTasksQuery = {
  getAllTasks?:  Array< {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
  } | null > | null,
};

export type OnCreateTaskSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnCreateTaskSubscription = {
  onCreateTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
  } | null,
};

export type OnUpdateTaskSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnUpdateTaskSubscription = {
  onUpdateTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
  } | null,
};

export type OnDeleteTaskSubscriptionVariables = {
  id?: string | null,
};

export type OnDeleteTaskSubscription = {
  onDeleteTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    description?: string | null,
  } | null,
};
