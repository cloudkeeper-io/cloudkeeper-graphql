export const Tenant = `
type Tenant {
  id: String
  name: String
  region: String
  createdAt: String
  isSetupCompleted: Boolean
}
`

export const IntegrationData = `
type IntegrationData {
  status: String
  functions: Int
}
`
