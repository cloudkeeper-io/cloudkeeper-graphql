// eslint-disable-next-line import/no-extraneous-dependencies
import * as Lambda from 'aws-sdk/clients/lambda'

const lambda = new Lambda({ apiVersion: '2015-03-31' })

export const getTenants = async (obj: any, args: any, context: any) => {
  const id = context.event.requestContext.authorizer.id
  const provider = context.event.requestContext.authorizer.provider

  const getUserResult = await lambda.invoke({
    FunctionName: `auth-service-${process.env.stage}-get-user`,
    Payload: JSON.stringify({
      id,
      provider,
    }),
  }).promise()

  const user = JSON.parse(getUserResult.Payload!.toString())

  if (user.tenantIds.length === 0) {
    return []
  }

  const getTenantsResult = await lambda.invoke({
    FunctionName: `cloudkeeper-metrics-service-${process.env.stage}-list-tenants`,
    Payload: JSON.stringify({
      tenantIds: user.tenantIds,
    }),
  }).promise()

  const tenants = JSON.parse(getTenantsResult.Payload!.toString())

  return tenants
}
