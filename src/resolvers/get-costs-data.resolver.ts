import { s3resolver } from './common'

export const getCostsData = async (obj: any, args: any, context: any) => s3resolver(args, context, 'costs')
