import { s3resolver } from './common'

export const getLambdasData = async (obj: any, args: any, context: any) => {
  return s3resolver(args, context, 'lambda')
}
