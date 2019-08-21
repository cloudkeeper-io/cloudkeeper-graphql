export const Query = `
type Query {
  lambdasData(tenantId: String): DashboardLambdasData
  dynamoData(tenantId: String): DashboardDynamoData
  lambdasList(tenantId: String, startDate: String, endDate: String): [LambdasListItem]
  mostExpensiveLambdas(tenantId: String, startDate: String, endDate: String): [MostExpensiveLambdasListItem]
  lambda(tenantId: String, name: String, region: String): LambdaConfiguration
  events(tenantId: String): DashboardEventsData
  lambdaStats(tenantId: String, name: String, region: String, startDate: String, endDate: String): LambdaStats
  costsData(tenantId: String): CostsData
  dynamoTablesList(tenantId: String, startDate: String, endDate: String): [DynamoTableListItem]
  mostExpensiveDynamoTables(tenantId: String, startDate: String, endDate: String): [MostExpensiveDynamoTable]
  dynamoTable(tenantId: String, name: String, region: String): DynamoTableDetails
  dynamoTableStats(tenantId: String, name: String, region: String, startDate: String, endDate: String): DynamoTableStats
  awsRegions: [String]
  tenants: [Tenant!]
}`
