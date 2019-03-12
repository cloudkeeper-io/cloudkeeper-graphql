import * as GraphQLJSON from 'graphql-type-json'
import {
  getDashboardData,
  getTenants,
  createTenant,
} from './resolvers'

export default {
  JSON: GraphQLJSON,
  Query: {
    dashboardData: getDashboardData,
    tenants: getTenants,
  },
  Mutation: {
    createTenant,
  },
}
