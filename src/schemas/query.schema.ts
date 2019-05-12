export const Query = `
type Query {
  lambdasData(tenantId: String): DashboardLambdasData
  dynamoData(tenantId: String): DashboardDynamoData
  lambdasList(tenantId: String, startDate: String, endDate: String): [LambdasListItem]
  lambda(tenantId: String, name: String, region: String): LambdaConfiguration
  lambdaStats(tenantId: String, name: String, region: String, startDate: String, endDate: String): LambdaStats
  dynamoTablesList(tenantId: String, startDate: String, endDate: String): [DynamoTableListItem]
  dynamoTable(tenantId: String, name: String, region: String): DynamoTableDetails
  dynamoTableStats(tenantId: String, name: String, region: String, startDate: String, endDate: String): DynamoTableStats
  awsRegions: [String]
  tenants: [Tenant!]
}`
