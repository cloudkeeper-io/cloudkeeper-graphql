export const Mutation = `
type Mutation {
  setupTenant(accessKey: String!, secretKey: String!, region: String!): Tenant
}
`
