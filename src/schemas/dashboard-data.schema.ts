export const TotalsDataPoint = `
type TotalsDataPoint {
  dateTime: String
  invocations: Int
  errors: Int
}
`

export const TotalsSummary = `
type TotalsSummary {
  invocations: Int
  errors: Int
}
`

export const Totals = `
type Totals {
  totals: TotalsSummary
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
}`;
