export const OwnerData = `
type OwnerData {
  id: String!
}
`

export const Tenant = `
type Tenant {
  id: String!
  name: String!
  createdAt: String!
  isSetupCompleted: Boolean!
  owner: OwnerData!
}
`

export const IntegrationData = `
type IntegrationData {
  status: String
  functions: Int
}
`
