// eslint-disable-next-line import/no-extraneous-dependencies
import { getLambda } from '../aws.utils'
import { checkTenantAccess } from './common'

export const getDynamoTableStats = async (obj: any, args: any, context: any) => {
  const lambda = await getLambda()

  const userId = context.event.requestContext.authorizer.userId
  const { tenantId, name, region, startDate, endDate } = args

  await checkTenantAccess(userId, tenantId)

  const getTablesResult = await lambda.invoke({
    FunctionName: `cloudkeeper-metrics-service-${process.env.stage}-get-dynamo-table-stats`,
    Payload: JSON.stringify({
      name,
      region,
      tenantId,
      startDate,
      endDate,
    }),
  }).promise()

  console.log(getTablesResult.Payload!.toString())

  return JSON.parse(getTablesResult.Payload!.toString())
}
