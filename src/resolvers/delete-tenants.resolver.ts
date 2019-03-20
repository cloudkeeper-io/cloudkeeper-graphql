// eslint-disable-next-line import/no-extraneous-dependencies
import * as Lambda from 'aws-sdk/clients/lambda'
// @ts-ignore
import * as xRay from 'aws-xray-sdk-core'

const lambda = xRay.captureAWSClient(new Lambda({ apiVersion: '2015-03-31' }))

export const deleteTenant = async (obj: any, args: any, context: any) => {
  const id = context.event.requestContext.authorizer.id
  const provider = context.event.requestContext.authorizer.provider

  const deleteTenantResult = await lambda.invoke({
    FunctionName: `cloudkeeper-metrics-service-${process.env.stage}-delete-tenant`,
    Payload: JSON.stringify({
      provider,
      userId: id,
      tenantId: args.id,
    }),
  }).promise()

  const tenant = JSON.parse(deleteTenantResult.Payload!.toString())

  return tenant
}
