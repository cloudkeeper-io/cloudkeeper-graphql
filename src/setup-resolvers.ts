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
  getDynamoTable,
  getDynamoTableStats,
  getCostsData,
  getEventsData,
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
    dynamoTable: getDynamoTable,
    dynamoTableStats: getDynamoTableStats,
    events: getEventsData,
    tenants: getTenants,
    awsRegions: getAwsRegions,
    costsData: getCostsData,
  },
  Mutation: {
    createTenant,
    deleteTenant,
    setupTenant,
  },
}
