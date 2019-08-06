import { gql } from 'apollo-server'

export const MostReadTableDataPoint = gql`
type MostReadTableDataPoint {
  consumedRead: Int
  provisionedRead: Int
  dateTime: String
}
`
export const MostReadTableData = gql`
type MostReadTableData {
  name: String
  region: String
  averageConsumedRead: Float
  billingMode: String
  sizeBytes: Int
  items: Int
  consumedRead: Int
  provisionedRead: Int
  dataPoints: [MostReadTableDataPoint!]
}
`

export const MostWritesTableDataPoint = gql`
type MostWritesTableDataPoint {
  consumedWrite: Int
  provisionedWrite: Int
  dateTime: String
}
`
export const MostWritesTableData = gql`
type MostWritesTableData {
  name: String
  region: String
  averageConsumedWrite: Float
  billingMode: String
  sizeBytes: Int
  items: Int
  consumedWrite: Int
  provisionedWrite: Int
  dataPoints: [MostWritesTableDataPoint!]
}
`

export const MostThrottledTableDataPoint = gql`
type MostThrottledTableDataPoint {
  throttledRequests: Int
  throttledReads: Int
  throttledWrites: Int
  dateTime: String
}
`
export const MostThrottledTableData = gql`
type MostThrottledTableData {
  name: String
  region: String
  billingMode: String
  sizeBytes: Int
  items: Int
  throttledRequests: Int
  throttledReads: Int
  throttledWrites: Int
  dataPoints: [MostThrottledTableDataPoint!]
}
`

export const MostExpensiveTableDataPoint = gql`
type MostExpensiveTableDataPoint {
  totalPrice: Float
  readPrice: Float
  writePrice: Float
  storagePrice: Float
  dateTime: String
}
`
export const MostExpensiveTableData = gql`
type MostExpensiveTableData {
  name: String
  region: String
  billingMode: String
  sizeBytes: Int
  items: Int
  totalPrice: Float
  readPrice: Float
  writePrice: Float
  storagePrice: Float
  dataPoints: [MostExpensiveTableDataPoint!]
}
`

export const DashboardDynamoDataForPeriod = gql`
type DashboardDynamoDataForPeriod {
  mostReadTables: [MostReadTableData]
  mostWritesTables: [MostWritesTableData]
  mostThrottledTables: [MostThrottledTableData!]
  mostExpensiveTables: [MostExpensiveTableData!]
}
`

export const DashboardDynamoData = gql`
type DashboardDynamoData {
  processing: Boolean
  last24Hours: DashboardDynamoDataForPeriod,
  last30Days: DashboardDynamoDataForPeriod,
}
`

export const DynamoTableListItem = gql`
type DynamoTableListItem {
  name: String
  items: Int
  sizeBytes: Int
  region: String
  billingMode: String
  consumedRead: Int
  consumedWrite: Int
  avgProvisionedRead: Float
  avgProvisionedWrite: Float
  throttledReads: Int
  throttledWrites: Int
}
`

export const DynamoTableDetails = gql`
type DynamoTableDetails {
  name: String
  region: String
  sizeBytes: Int
  items: Int
  billingMode: String
}
`

export const DynamoTableStatsDataPoint = gql`
type DynamoTableStatsDataPoint {
  consumedRead: Int
  consumedWrite: Int
  provisionedRead: Int
  provisionedWrite: Int
  throttledReads: Int
  throttledWrites: Int
  dateTime: String
}
`

export const DynamoTableStats = gql`
type DynamoTableStats {
  totalConsumedRead: Int
  totalConsumedWrite: Int
  totalProvisionedRead: Int
  totalProvisionedWrite: Int
  totalThrottledReads: Int
  totalThrottledWrites: Int
  dataPoints: [DynamoTableStatsDataPoint!]
}
`
