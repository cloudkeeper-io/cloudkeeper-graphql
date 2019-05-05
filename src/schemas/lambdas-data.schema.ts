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

export const SlowLambdaDataPoint = `
type SlowLambdaDataPoint {
  averageDuration: Float
  maxDuration: Float
  dateTime: String
}
`

export const SlowLambdaData = `
type SlowLambdaData {
  lambdaName: String
  region: String
  size: Int
  runtime: String
  timeout: Int
  codeSize: Int
  averageDuration: Float
  maxDuration: Float
  dataPoints: [SlowLambdaDataPoint]
}
`

export const MostInvokedLambdaDataPoint = `
type MostInvokedLambdaDataPoint {
  invocations: Int
  dateTime: String
}
`

export const MostInvokedLambdaData = `
type MostInvokedLambdaData {
  lambdaName: String
  region: String
  size: Int
  runtime: String
  timeout: Int
  codeSize: Int
  invocationsPerSecond: Float
  invocations: Int
  dataPoints: [MostInvokedLambdaDataPoint]
}
`
export const MostErrorsLambdaDataPoint = `
type MostErrorsLambdaDataPoint {
  errors: Int
  dateTime: String
}
`

export const MostErrorsLambdaData = `
type MostErrorsLambdaData {
  lambdaName: String
  region: String
  size: Int
  runtime: String
  errorRate: Float
  timeout: Int
  codeSize: Int
  errors: Int
  dataPoints: [MostErrorsLambdaDataPoint]
}
`
export const MostExpensiveLambdaDataPoint = `
type MostExpensiveLambdaDataPoint {
  cost: Float
  dateTime: String
}
`
export const MostExpensiveLambdaData = `
type MostExpensiveLambdaData {
  lambdaName: String
  region: String
  size: Int
  runtime: String
  timeout: Int
  codeSize: Int
  cost: Float
  dataPoints: [MostExpensiveLambdaDataPoint]
}
`

export const DashboardDataForPeriod = `
type DashboardLambdaDataForPeriod {
  totals: Totals
  slowestLambdas: [SlowLambdaData]
  mostInvokedLambdas: [MostInvokedLambdaData]
  mostErrorsLambdas: [MostErrorsLambdaData]
  mostExpensiveLambdas: [MostExpensiveLambdaData]
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
