export const Query = `
type Query {
  dashboardData(tenantId: String): DashboardData
  tenants: [Tenant]
}`
