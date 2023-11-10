import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { GraphQLClient } from 'graphql-request'
import awsmobile from '../aws-exports'
 
export const client = new GraphQLClient(awsmobile.aws_appsync_graphqlEndpoint,{headers:{'x-api-key':awsmobile.aws_appsync_apiKey}})
 
export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({ client }),
  endpoints: () => ({})
})