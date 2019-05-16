export const TotalsDataPoint = `
type TotalsDataPoint {
  dateTime: String
  invocations: Int
  errors: Int
  cost: Float
}
`

export const Totals = `
type Totals {
  invocations: Int
  errors: Int
  cost: Float
  dataPoints: [TotalsDataPoint]
}
`

export const DashboardDataForPeriod = `
type DashboardLambdaDataForPeriod {
  totals: Totals
}
`

export const DashboardLambdasData = `
type DashboardLambdasData {
  processing: Boolean
  last24Hours: DashboardLambdaDataForPeriod,
  last30Days: DashboardLambdaDataForPeriod,
}
`

export const LambdasListItem = `
type LambdasListItem {
  tenantId: String
  name: String
  region: String
  runtime: String
  size: Int
  codeSize: Int
  timeout: Int
  avgExecutionTime: Float
  invocations: Int
  errors: Int
  errorRate: Float
  cost: Float
}
`

export const LambdaStatsDataPoint = `
type LambdaStatsDataPoint {
  invocations: Int
  errors: Int
  averageDuration: Float
  dateTime: String
}
`

export const LambdaStats = `
type LambdaStats {
  totalInvocations: Int
  totalErrors: Int
  averageDuration: Float
  dataPoints: [LambdaStatsDataPoint]
}
`

export const LambdaConfiguration = `
type LambdaConfiguration {
  name: String
  region: String
  runtime: String
  timeout: Int
  size: Int
  codeSize: Int
}
`
