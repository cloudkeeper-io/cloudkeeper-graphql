export const Query = `
type Query {
  lambdasData(tenantId: String): DashboardLambdasData
  dynamoData(tenantId: String): DashboardDynamoData
  tenants: [Tenant]
}`
