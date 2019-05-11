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
  getDynamoTablesList,
} from './resolvers'

export default {
  JSON: GraphQLJSON,
  Query: {
    lambdasData: getLambdasData,
    dynamoData: getDynamoData,
    lambdasList: getLambdasList,
    lambda: getLambdaConfiguration,
    lambdaStats: getLambdaStats,
    dynamoTablesList: getDynamoTablesList,
    tenants: getTenants,
    awsRegions: getAwsRegions,
  },
  Mutation: {
    createTenant,
    deleteTenant,
    setupTenant,
  },
}
