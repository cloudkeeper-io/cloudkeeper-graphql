import { gql } from 'apollo-server'

export const TenantTypes = gql`
type OwnerData {
  id: String!
}

type InitialProcessingData {
  done: Boolean!
}

type Tenant {
  id: String!
  name: String!
  createdAt: String!
  isSetupCompleted: Boolean!
  owner: OwnerData!
  initialProcessing: InitialProcessingData!
}

type IntegrationData {
  status: String
  functions: Int
}
`
