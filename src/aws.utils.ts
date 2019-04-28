import * as AWS from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'
// @ts-ignore
import * as AWSXRay from 'aws-xray-sdk-core'
import { memoize } from 'lodash'
import { Lambda, S3 } from 'aws-sdk'

const getAws = memoize(() => {
  if (AWSXRay.getNamespace().get('segment')) {
    return AWSXRay.captureAWS(AWS)
  }

  return AWS
})

export const getDynamo = memoize((): DocumentClient => {
  const aws = getAws()
  return new aws.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' })
})

export const getLambda = memoize((): Lambda => {
  const aws = getAws()
  return new aws.Lambda({ apiVersion: '2015-03-31' })
})

export const getS3 = memoize((): S3 => {
  const aws = getAws()
  return new aws.S3({ apiVersion: '2006-03-01' })
})
