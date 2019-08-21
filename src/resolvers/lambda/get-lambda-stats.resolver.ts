// eslint-disable-next-line import/no-extraneous-dependencies
import { getLambda } from '../../aws.utils'
import { checkTenantAccess } from '../common'

export const getLambdaStats = async (obj: any, args: any, context: any) => {
  const lambda = await getLambda()

  const { userId } = context.event.requestContext.authorizer
  const { tenantId, name, region, startDate, endDate } = args

  await checkTenantAccess(userId, tenantId)

  const getLambdasResult = await lambda.invoke({
    FunctionName: `cloudkeeper-metrics-service-${process.env.stage}-get-lambda-stats`,
    Payload: JSON.stringify({
      tenantId,
      name,
      region,
      startDate,
      endDate,
    }),
  }).promise()

  return JSON.parse(getLambdasResult.Payload!.toString())
}
