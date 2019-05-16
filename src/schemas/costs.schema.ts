export const ServiceCostItem = `
type ServiceCostItem {
  serviceName: String
  date: String
  blendedCost: Float
}
`

export const CostsPerServiceDataPoint = `
type CostsPerServiceDataPoint {
  date: String
  total: Float
  serviceCosts: [ServiceCostItem]
}
`

export const StackCostItem = `
type StackCostItem {
  stackName: String
  date: String
  blendedCost: Float
}
`

export const CostsPerStackDataPoint = `
type CostsPerStackDataPoint {
  date: String
  total: Float
  stackCosts: [StackCostItem]
}
`

export const CostsData = `
type CostsData {
  costsPerService: [CostsPerServiceDataPoint]
  costsPerStack: [CostsPerStackDataPoint]
}
`
