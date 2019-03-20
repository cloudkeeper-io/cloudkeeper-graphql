export const Mutation = `
type Mutation {
  createTenant(name: String!, accessKey: String!, secretKey: String!, region: String!): Tenant
  deleteTenant(id: String!): Tenant
}
`
