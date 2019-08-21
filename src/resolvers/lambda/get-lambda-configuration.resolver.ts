// eslint-disable-next-line import/no-extraneous-dependencies
import { getLambda } from '../../aws.utils'
import { checkTenantAccess } from '../common'

export const getLambdaConfiguration = async (obj: any, args: any, context: any) => {
  const lambda = await getLambda()

  const { userId } = context.event.requestContext.authorizer
  const { tenantId, name, region } = args

  await checkTenantAccess(userId, tenantId)

  const result = await lambda.invoke({
    FunctionName: `cloudkeeper-metrics-service-${process.env.stage}-get-lambda`,
    Payload: JSON.stringify({
      tenantId,
      name,
      region,
    }),
  }).promise()

  return JSON.parse(result.Payload!.toString())
}
