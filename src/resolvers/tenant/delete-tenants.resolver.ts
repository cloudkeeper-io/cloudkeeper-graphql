// eslint-disable-next-line import/no-extraneous-dependencies
import * as Lambda from 'aws-sdk/clients/lambda'
// @ts-ignore
import * as xRay from 'aws-xray-sdk-core'
import { checkError } from '../../utils'

const lambda = xRay.captureAWSClient(new Lambda({ apiVersion: '2015-03-31' }))

export const deleteTenant = async (obj: any, args: any, context: any) => {
  const { userId } = context.event.requestContext.authorizer

  const deleteTenantResult = await lambda.invoke({
    FunctionName: `cloudkeeper-metrics-service-${process.env.stage}-delete-tenant`,
    Payload: JSON.stringify({
      userId,
      tenantId: args.id,
    }),
  }).promise()

  const tenant = JSON.parse(deleteTenantResult.Payload!.toString())

  checkError(tenant)

  return tenant
}
