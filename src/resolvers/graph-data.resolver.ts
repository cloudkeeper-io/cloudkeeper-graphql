import * as AWS from 'aws-sdk'
import * as Lambda from 'aws-sdk/clients/lambda'
import { includes } from 'lodash'

const s3 = new AWS.S3({ apiVersion: '2006-03-01' })
const lambda = new Lambda({ apiVersion: '2015-03-31' })

export const getDashboardData = async (obj: any, args: any, context: any) => {
  const tenantId = args.tenantId
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

  if (!includes(user.tenantIds, tenantId)) {
    throw new Error('tenant not found')
  }

  const params = {
    Bucket: process.env.bucket!,
    Key: `dashboard/data/${tenantId}.json`,
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
