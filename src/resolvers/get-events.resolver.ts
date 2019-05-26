import { s3resolver } from './common'

export const getEventsData = async (obj: any, args: any, context: any) => {
  return s3resolver(args, context, 'events')
}
