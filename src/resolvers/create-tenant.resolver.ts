import * as Lambda from 'aws-sdk/clients/lambda'
import { checkError } from '../utils'

const lambda = new Lambda({ apiVersion: '2015-03-31' })

export const createTenant = async (obj: any, args: any, context: any) => {
  const userId = context.event.requestContext.authorizer.userId

  const createTenantResult = await lambda.invoke({
    FunctionName: `cloudkeeper-metrics-service-${process.env.stage}-create-tenant`,
    Payload: JSON.stringify({
      ...args,
      userId,
    }),
  }).promise()

  const tenant = JSON.parse(createTenantResult.Payload!.toString())

  checkError(tenant)

  return tenant
}
