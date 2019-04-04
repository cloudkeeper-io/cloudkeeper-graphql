import * as Lambda from 'aws-sdk/clients/lambda'

const lambda = new Lambda({ apiVersion: '2015-03-31' })

export const createTenant = async (obj: any, args: any, context: any) => {
  const userId = context.event.requestContext.authorizer.id
  const provider = context.event.requestContext.authorizer.provider

  const createTenantResult = await lambda.invoke({
    FunctionName: `cloudkeeper-metrics-service-${process.env.stage}-create-tenant`,
    Payload: JSON.stringify({
      ...args,
      userId,
      provider,
    }),
  }).promise()

  const tenant = JSON.parse(createTenantResult.Payload!.toString())

  if (!tenant || tenant.status === 'FAILED') {
    if (tenant.error === 'KEYS_ISSUE') {
      throw new Error('KEYS_ISSUE')
    }

    throw new Error('Failed setup')
  }

  return tenant
}
