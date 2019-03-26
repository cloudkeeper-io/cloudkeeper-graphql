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
  size: Int
  runtime: String
  timeout: Int
  codeSize: Int
  averageDuration: Float
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
  size: Int
  runtime: String
  timeout: Int
  codeSize: Int
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
  size: Int
  runtime: String
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
  last24Hours: DashboardLambdaDataForPeriod,
  last30Days: DashboardLambdaDataForPeriod,
}
`
