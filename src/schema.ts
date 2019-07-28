import {
  DashboardDynamoData,
  DashboardDynamoDataForPeriod,
  DynamoTableListItem,
  DynamoTableDetails,
  DynamoTableStatsDataPoint,
  DynamoTableStats,
  MostExpensiveTableData,
  MostExpensiveTableDataPoint,
  MostThrottledTableData,
  MostThrottledTableDataPoint,
  MostWritesTableData,
  MostWritesTableDataPoint,
  MostReadTableData,
  MostReadTableDataPoint,
  DashboardLambdasData,
  DashboardDataForPeriod,
  CostsData,
  CostsPerStackDataPoint,
  CostsPerServiceDataPoint,
  StackCostItem,
  ServiceCostItem,
  LambdaConfiguration,
  LambdasListItem,
  LambdaStatsDataPoint,
  LambdaStats,
  IntegrationData,
  Event,
  DashboardEventsData,
  OwnerData,
  Tenant,
  Query,
  Totals,
  TotalsDataPoint,
  Mutation,
} from './schemas'

export default [
  'scalar JSON',
  DashboardDynamoData,
  DynamoTableDetails,
  DynamoTableStatsDataPoint,
  DynamoTableStats,
  DashboardDynamoDataForPeriod,
  DynamoTableListItem,
  MostExpensiveTableData,
  MostExpensiveTableDataPoint,
  MostThrottledTableData,
  MostThrottledTableDataPoint,
  MostWritesTableData,
  MostWritesTableDataPoint,
  MostReadTableData,
  MostReadTableDataPoint,
  DashboardLambdasData,
  DashboardDataForPeriod,
  CostsData,
  CostsPerStackDataPoint,
  CostsPerServiceDataPoint,
  StackCostItem,
  ServiceCostItem,
  TotalsDataPoint,
  Totals,
  Event,
  DashboardEventsData,
  OwnerData,
  Tenant,
  LambdaConfiguration,
  LambdasListItem,
  LambdaStatsDataPoint,
  LambdaStats,
  IntegrationData,
  Query,
  Mutation,
]
