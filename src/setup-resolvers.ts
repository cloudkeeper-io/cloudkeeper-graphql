import * as GraphQLJSON from 'graphql-type-json'
import {
  getLambdasData,
  getDynamoData,
  getTenants,
  createTenant,
  deleteTenant,
  getAwsRegions,
} from './resolvers'

export default {
  JSON: GraphQLJSON,
  Query: {
    lambdasData: getLambdasData,
    dynamoData: getDynamoData,
    tenants: getTenants,
    awsRegions: getAwsRegions,
  },
  Mutation: {
    createTenant,
    deleteTenant,
  },
}
