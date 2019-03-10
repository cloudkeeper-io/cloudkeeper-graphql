export const TotalsDataPoint = `
type TotalsDataPoint {
  dateTime: String
  invocations: Int
  errors: Int
}
`

export const Totals = `
type Totals {
  invocations: Int
  errors: Int
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
  errors: Int
  dataPoints: [MostErrorsLambdaDataPoint]
}
`

export const DashboardDataForPeriod = `
type DashboardDataForPeriod {
  totals: Totals
  slowestLambdas: [SlowLambdaData]
  mostInvokedLambdas: [MostInvokedLambdaData]
  mostErrorsLambdas: [MostErrorsLambdaData]
}
`

export const DashboardData = `
type DashboardData {
  last24Hours: DashboardDataForPeriod,
}
`
