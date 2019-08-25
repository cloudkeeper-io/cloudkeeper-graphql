import { gql } from 'apollo-server'

export const Event = gql`
type Event {
  serviceName: String
  dimension: String
  message: String
  dateTime: String
  expectedValue: Float
  value: Float
}
`
