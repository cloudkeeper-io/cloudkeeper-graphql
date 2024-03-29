import * as Lambda from 'aws-sdk/clients/lambda'
import { checkError } from '../utils'

const lambda = new Lambda({ apiVersion: '2015-03-31' })

export const setupTenant = async (obj: any, args: any, context: any) => {
  const { userId } = context.event.requestContext.authorizer

  const createTenantResult = await lambda.invoke({
    FunctionName: `cloudkeeper-metrics-service-${process.env.stage}-setup-tenant`,
    Payload: JSON.stringify({
      ...args,
      userId,
    }),
  }).promise()

  const tenant = JSON.parse(createTenantResult.Payload!.toString())

  if (tenant && tenant.error === 'KEYS_ISSUE') {
    throw new Error('KEYS_ISSUE')
  }

  checkError(tenant)

  return tenant
}
