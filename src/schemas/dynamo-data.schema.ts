export const MostReadTableDataPoint = `
type MostReadTableDataPoint {
  consumedRead: Int
  provisionedRead: Int
  dateTime: String
}
`
export const MostReadTableData = `
type MostReadTableData {
  name: String
  region: String
  averageConsumedRead: Float
  billingMode: String
  sizeBytes: Int
  items: Int
  consumedRead: Int
  provisionedRead: Int
  dataPoints: [MostReadTableDataPoint]
}
`

export const MostWritesTableDataPoint = `
type MostWritesTableDataPoint {
  consumedWrite: Int
  provisionedWrite: Int
  dateTime: String
}
`
export const MostWritesTableData = `
type MostWritesTableData {
  name: String
  region: String
  averageConsumedWrite: Float
  billingMode: String
  sizeBytes: Int
  items: Int
  consumedWrite: Int
  provisionedWrite: Int
  dataPoints: [MostWritesTableDataPoint]
}
`

export const MostThrottledTableDataPoint = `
type MostThrottledTableDataPoint {
  throttledRequests: Int
  throttledReads: Int
  throttledWrites: Int
  dateTime: String
}
`
export const MostThrottledTableData = `
type MostThrottledTableData {
  name: String
  region: String
  billingMode: String
  sizeBytes: Int
  items: Int
  throttledRequests: Int
  throttledReads: Int
  throttledWrites: Int
  dataPoints: [MostThrottledTableDataPoint]
}
`

export const MostExpensiveTableDataPoint = `
type MostExpensiveTableDataPoint {
  totalPrice: Float
  readPrice: Float
  writePrice: Float
  storagePrice: Float
  dateTime: String
}
`
export const MostExpensiveTableData = `
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
  dataPoints: [MostExpensiveTableDataPoint]
}
`

export const DashboardDynamoDataForPeriod = `
type DashboardDynamoDataForPeriod {
  mostReadTables: [MostReadTableData]
  mostWritesTables: [MostWritesTableData]
  mostThrottledTables: [MostThrottledTableData]
  mostExpensiveTables: [MostExpensiveTableData]
}
`

export const DashboardDynamoData = `
type DashboardDynamoData {
  processing: Boolean
  last24Hours: DashboardDynamoDataForPeriod,
  last30Days: DashboardDynamoDataForPeriod,
}
`

export const DynamoTableListItem = `
type DynamoTableListItem {
  name: String
  items: Int
  sizeBytes: Int
  region: String
  billingMode: String
  avgConsumedRead: Float
  avgConsumedWrite: Float
  avgProvisionedRead: Float
  avgProvisionedWrite: Float
  throttledReads: Int
  throttledWrites: Int
}
`

export const DynamoTableDetails = `
type DynamoTableDetails {
  name: String
  region: String
  sizeBytes: Int
  items: Int
  billingMode: String
}
`

export const DynamoTableStatsDataPoint = `
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

export const DynamoTableStats = `
type DynamoTableStats {
  totalConsumedRead: Int
  totalConsumedWrite: Int
  totalProvisionedRead: Int
  totalProvisionedWrite: Int
  totalThrottledReads: Int
  totalThrottledWrites: Int
  dataPoints: [DynamoTableStatsDataPoint]
}
`
