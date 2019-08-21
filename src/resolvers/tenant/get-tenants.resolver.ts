// eslint-disable-next-line import/no-extraneous-dependencies
import { getLambda } from '../../aws.utils'

export const getTenants = async (obj: any, args: any, context: any) => {
  const lambda = await getLambda()
  const { userId } = context.event.requestContext.authorizer

  const getTenantsResult = await lambda.invoke({
    FunctionName: `cloudkeeper-metrics-service-${process.env.stage}-list-tenants`,
    Payload: JSON.stringify({
      userId,
    }),
  }).promise()

  return JSON.parse(getTenantsResult.Payload!.toString())
}
