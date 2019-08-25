import { gql } from 'apollo-server'

export const Query = gql`
type Query {
  lambdaTotals(tenantId: String, startDate: String, endDate: String): LambdaTotals
  dynamoData(tenantId: String): DashboardDynamoData
  lambdasList(tenantId: String, startDate: String, endDate: String): [LambdasListItem]
  mostExpensiveLambdas(tenantId: String, startDate: String, endDate: String): [MostExpensiveLambdasListItem]
  lambda(tenantId: String, name: String, region: String): LambdaConfiguration
  events(tenantId: String, startDate: String, endDate: String): [Event]
  lambdaStats(tenantId: String, name: String, region: String, startDate: String, endDate: String): LambdaStats
  costsData(tenantId: String, startDate: String, endDate: String): CostsData
  dynamoTablesList(tenantId: String, startDate: String, endDate: String): [DynamoTableListItem]
  mostExpensiveDynamoTables(tenantId: String, startDate: String, endDate: String): [MostExpensiveDynamoTable]
  dynamoTable(tenantId: String, name: String, region: String): DynamoTableDetails
  dynamoTableStats(tenantId: String, name: String, region: String, startDate: String, endDate: String): DynamoTableStats
  awsRegions: [String]
  tenants: [Tenant!]
}`
