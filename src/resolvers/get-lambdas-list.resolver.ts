// eslint-disable-next-line import/no-extraneous-dependencies
import { getLambda } from '../aws.utils'
import { checkTenantAccess } from './common'

export const getLambdasList = async (obj: any, args: any, context: any) => {
  const lambda = await getLambda()

  const userId = context.event.requestContext.authorizer.userId
  const { tenantId, startDate, endDate } = args

  await checkTenantAccess(userId, tenantId)

  const getLambdasResult = await lambda.invoke({
    FunctionName: `cloudkeeper-metrics-service-${process.env.stage}-list-lambdas`,
    Payload: JSON.stringify({
      tenantId,
      startDate,
      endDate,
    }),
  }).promise()

  return JSON.parse(getLambdasResult.Payload!.toString())
}
