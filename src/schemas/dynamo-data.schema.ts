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
