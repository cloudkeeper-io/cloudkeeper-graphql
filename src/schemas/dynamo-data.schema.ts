import { gql } from 'apollo-server'

export const DynamoTypes = gql`
type MostReadTableDataPoint {
  consumedRead: Int
  provisionedRead: Int
  dateTime: String
}

type MostReadTableData {
  name: String!
  region: String!
  averageConsumedRead: Float!
  billingMode: String!
  sizeBytes: Float!
  items: Float!
  consumedRead: Int!
  provisionedRead: Int!
  dataPoints: [MostReadTableDataPoint!]
}

type MostWritesTableDataPoint {
  consumedWrite: Int
  provisionedWrite: Int
  dateTime: String
}

type MostWritesTableData {
  name: String
  region: String
  averageConsumedWrite: Float
  billingMode: String
  sizeBytes: Float
  items: Float
  consumedWrite: Int
  provisionedWrite: Int
  dataPoints: [MostWritesTableDataPoint!]
}

type MostThrottledTableDataPoint {
  throttledRequests: Int
  throttledReads: Int
  throttledWrites: Int
  dateTime: String
}

type MostThrottledTableData {
  name: String
  region: String
  billingMode: String
  sizeBytes: Float
  items: Float
  throttledRequests: Int
  throttledReads: Int
  throttledWrites: Int
  dataPoints: [MostThrottledTableDataPoint!]
}

type MostExpensiveTableDataPoint {
  totalPrice: Float
  readPrice: Float
  writePrice: Float
  storagePrice: Float
  dateTime: String
}

type MostExpensiveTableData {
  name: String!
  region: String!
  billingMode: String!
  sizeBytes: Float!
  items: Float!
  totalPrice: Float!
  readPrice: Float!
  writePrice: Float!
  storagePrice: Float!
  dataPoints: [MostExpensiveTableDataPoint!]
}

type DashboardDynamoDataForPeriod {
  mostReadTables: [MostReadTableData!]!
  mostWritesTables: [MostWritesTableData!]!
  mostThrottledTables: [MostThrottledTableData!]!
  mostExpensiveTables: [MostExpensiveTableData!]!
}

type DashboardDynamoData {
  processing: Boolean!
  last24Hours: DashboardDynamoDataForPeriod,
  last30Days: DashboardDynamoDataForPeriod,
}

type DynamoTableListItem {
  name: String
  items: Float
  sizeBytes: Float
  region: String
  billingMode: String
  consumedRead: Int
  consumedWrite: Int
  avgProvisionedRead: Float
  avgProvisionedWrite: Float
  throttledReads: Int
  throttledWrites: Int
  cost: Float
}

type DynamoTableDetails {
  name: String
  region: String
  sizeBytes: Float
  items: Float
  billingMode: String
}

type DynamoTableStatsDataPoint {
  consumedRead: Int
  consumedWrite: Int
  provisionedRead: Int
  provisionedWrite: Int
  throttledReads: Int
  throttledWrites: Int
  dateTime: String
}

type DynamoTableStats {
  totalConsumedRead: Int
  totalConsumedWrite: Int
  totalProvisionedRead: Int
  totalProvisionedWrite: Int
  totalThrottledReads: Int
  totalThrottledWrites: Int
  dataPoints: [DynamoTableStatsDataPoint!]
}

type MostExpensiveDynamoTable {
    name: String!
    items: Float!
    sizeBytes: Float!
    region: String!
    billingMode: String!
    cost: Float!
}
`
