import * as AWS from 'aws-sdk';

const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

export const getDashboardData = async (obj: any, args: any, context: any) => {
  const tenantId = context.event.requestContext.authorizer.tenant;

  const params = {
    Bucket: process.env.bucket!,
    Key: `dashboard/data/${tenantId}.json`,
  };

  const data = await s3.getObject(params).promise();

  return JSON.parse(data.Body!.toString());
};
