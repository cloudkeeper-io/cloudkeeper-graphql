// eslint-disable-next-line import/no-extraneous-dependencies
import * as Lambda from 'aws-sdk/clients/lambda'
// @ts-ignore
import * as xRay from 'aws-xray-sdk-core'

const lambda = xRay.captureAWSClient(new Lambda({ apiVersion: '2015-03-31' }))

export const getTenants = async (obj: any, args: any, context: any) => {
  const userId = context.event.requestContext.authorizer.userId

  const getTenantsResult = await lambda.invoke({
    FunctionName: `cloudkeeper-metrics-service-${process.env.stage}-list-tenants`,
    Payload: JSON.stringify({
      userId,
    }),
  }).promise()

  return JSON.parse(getTenantsResult.Payload!.toString())
}
