import * as GraphQLJSON from 'graphql-type-json'
import {
  getLambdasData,
  getDynamoData,
  getTenants,
  createTenant,
  deleteTenant,
  getAwsRegions,
  getLambdasList,
  getLambdaConfiguration,
  getLambdaStats,
  setupTenant,
} from './resolvers'

export default {
  JSON: GraphQLJSON,
  Query: {
    lambdasData: getLambdasData,
    dynamoData: getDynamoData,
    lambdasList: getLambdasList,
    lambda: getLambdaConfiguration,
    lambdaStats: getLambdaStats,
    tenants: getTenants,
    awsRegions: getAwsRegions,
  },
  Mutation: {
    createTenant,
    deleteTenant,
    setupTenant,
  },
}
