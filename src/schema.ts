import {
  DashboardData,
  DashboardDataForPeriod,
  SlowLambdaData,
  SlowLambdaDataPoint,
  MostInvokedLambdaData,
  MostInvokedLambdaDataPoint,
  MostErrorsLambdaData,
  MostErrorsLambdaDataPoint,
  Query,
  Totals,
  TotalsDataPoint,
} from './schemas'

export default [
  'scalar JSON',
  MostInvokedLambdaData,
  SlowLambdaData,
  SlowLambdaDataPoint,
  MostInvokedLambdaDataPoint,
  MostErrorsLambdaDataPoint,
  MostErrorsLambdaData,
  DashboardData,
  DashboardDataForPeriod,
  TotalsDataPoint,
  Totals,
  Query,
]
