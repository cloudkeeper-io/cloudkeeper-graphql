export const Event = `
type Event {
  serviceName: String
  dimension: String
  message: String
  dateTime: String
  expectedValue: Float
  value: Float
}
`

export const DashboardEventsData = `
type DashboardEventsData {
  processing: Boolean
  events: [Event]
}
`
