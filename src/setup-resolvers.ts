import * as GraphQLJSON from 'graphql-type-json'
import {
  getDashboardData,
  getTenants,
} from './resolvers'

export default {
  JSON: GraphQLJSON,
  Query: {
    dashboardData: getDashboardData,
    tenants: getTenants,
  },
  Mutation: {
    setupTenant: getTenants,
  },
}
