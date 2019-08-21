// eslint-disable-next-line import/no-extraneous-dependencies
import { getLambda } from '../../aws.utils'
import { checkTenantAccess } from '../common'

export const getMostExpensiveDynamoTables = async (obj: any, args: any, context: any) => {
  const lambda = await getLambda()

  const { userId } = context.event.requestContext.authorizer
  const { tenantId, startDate, endDate } = args

  await checkTenantAccess(userId, tenantId)

  const getTablesResult = await lambda.invoke({
    FunctionName: `cloudkeeper-metrics-service-${process.env.stage}-list-most-expensive-tables`,
    Payload: JSON.stringify({
      tenantId,
      startDate,
      endDate,
    }),
  }).promise()

  return JSON.parse(getTablesResult.Payload!.toString())
}
