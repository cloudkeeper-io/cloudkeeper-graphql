export const Mutation = `
type Mutation {
  createTenant(name: String!): Tenant
  setupTenant(tenantId: String!, roleArn: String!): IntegrationData
  deleteTenant(id: String!): Tenant
  generateTawkUserHash: String
}
`
