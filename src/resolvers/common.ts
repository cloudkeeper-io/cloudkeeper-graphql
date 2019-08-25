import { includes, map } from 'lodash'
import { getLambda, getS3 } from '../aws.utils'

export const checkTenantAccess = async (userId: string, tenantId: string) => {
  const lambda = await getLambda()

  const listTenantsResult = await lambda.invoke({
    FunctionName: `cloudkeeper-metrics-service-${process.env.stage}-list-tenants`,
    Payload: JSON.stringify({
      userId,
    }),
  }).promise()

  const tenants = JSON.parse(listTenantsResult.Payload!.toString())

  if (!includes(map(tenants, 'id'), tenantId)) {
    throw new Error('tenant not found')
  }
}

// eslint-disable-next-line consistent-return
export const s3resolver = async (args: any, context: any, prefix: string) => {
  const s3 = await getS3()

  const { tenantId } = args
  const { userId } = context.event.requestContext.authorizer

  await checkTenantAccess(userId, tenantId)

  const params = {
    Bucket: process.env.bucket!,
    Key: `dashboard/data/${prefix}/${tenantId}.json`,
  }

  try {
    const data = await s3.getObject(params).promise()

    return {
      processing: false,
      ...JSON.parse(data.Body!.toString()),
    }
  } catch (err) {
    if (err.code === 'NoSuchKey') {
      return {
        processing: true,
      }
    }
  }
}

export const lambdaResolver = async (args: any, context: any, functionName: string) => {
  const lambda = await getLambda()

  const { tenantId } = args
  const { userId } = context.event.requestContext.authorizer

  await checkTenantAccess(userId, tenantId)

  const result = await lambda.invoke({
    FunctionName: functionName,
    Payload: JSON.stringify({
      ...args,
      userId,
    }),
  }).promise()

  return result.Payload && JSON.parse(result.Payload.toString())
}
