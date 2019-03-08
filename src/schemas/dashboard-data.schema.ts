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

export const DashboardDataForPeriod = `
type DashboardDataForPeriod {
  totals: Totals
}
`

export const DashboardData = `
type DashboardData {
  last24Hours: DashboardDataForPeriod,
}`
