import * as AWS from 'aws-sdk'
import * as Lambda from 'aws-sdk/clients/lambda'
import { includes, map } from 'lodash'

const s3 = new AWS.S3({ apiVersion: '2006-03-01' })
const lambda = new Lambda({ apiVersion: '2015-03-31' })

export const s3resolver = async (args: any, context: any, prefix: string) => {
  const tenantId = args.tenantId
  const id = context.event.requestContext.authorizer.id
  const provider = context.event.requestContext.authorizer.provider

  const listTenantsResult = await lambda.invoke({
    FunctionName: `cloudkeeper-metrics-service-${process.env.stage}-list-tenants`,
    Payload: JSON.stringify({
      provider,
      userId: id,
    }),
  }).promise()

  const tenants = JSON.parse(listTenantsResult.Payload!.toString())

  if (!includes(map(tenants, 'id'), tenantId)) {
    throw new Error('tenant not found')
  }

  const params = {
    Bucket: process.env.bucket!,
    Key: `dashboard/data/${prefix}/${tenantId}.json`,
  }

  try {
    const data = await s3.getObject(params).promise()

    return JSON.parse(data.Body!.toString())
  } catch (err) {
    if (err.code === 'NoSuchKey') {
      return {
      }
    }
  }
}
