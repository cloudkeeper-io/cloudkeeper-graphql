import { s3resolver } from '../common'

export const getDynamoData = async (obj: any, args: any, context: any) => s3resolver(args, context, 'dynamo')
