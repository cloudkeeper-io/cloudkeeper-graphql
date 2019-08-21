import { gql } from 'apollo-server'

export const LambdaTypes = gql`
type TotalsDataPoint {
  dateTime: String
  invocations: Int
  errors: Int
  cost: Float
}

type Totals {
  invocations: Int
  errors: Int
  cost: Float
  dataPoints: [TotalsDataPoint]
}

type DashboardLambdaDataForPeriod {
  totals: Totals
}

type DashboardLambdasData {
  processing: Boolean
  last24Hours: DashboardLambdaDataForPeriod,
  last30Days: DashboardLambdaDataForPeriod,
}

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

type LambdaStatsDataPoint {
  invocations: Int
  errors: Int
  averageDuration: Float
  dateTime: String
}

type LambdaStats {
  totalInvocations: Int
  totalErrors: Int
  averageDuration: Float
  dataPoints: [LambdaStatsDataPoint]
}

type LambdaConfiguration {
  name: String
  region: String
  runtime: String
  timeout: Int
  size: Int
  codeSize: Int
}
    
type MostExpensiveLambdasListItem {
  tenantId: String
  name: String
  region: String
  runtime: String
  size: Int
  codeSize: Int
  timeout: Int
  cost: Float
}
`
