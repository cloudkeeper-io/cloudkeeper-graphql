import * as jwt from 'jsonwebtoken';

const getPolicyDocument = (effect: any, resource: any) => {
  return {
    Version: '2012-10-17', // default version
    Statement: [{
      Action: 'execute-api:Invoke', // default action
      Effect: effect,
      Resource: resource,
    }],
  };
};

// extract and return the Bearer Token from the Lambda event parameters
const getToken = (params: any) => {
  console.log(params);

  const tokenString = params.authorizationToken;
  if (!tokenString) {
    throw new Error("Expected 'event.authorizationToken\\' parameter to be set");
  }

  const match = tokenString.match(/^Bearer (.*)$/);
  if (!match || match.length < 2) {
    throw new Error(`Invalid Authorization token - '${tokenString}' does not match 'Bearer .*'`);
  }
  return match[1];
};

export const authenticate = async (params: any) => {
  const token = getToken(params);

  const decoded: any = await jwt.verify(token, process.env.appSecret as string)

  return {
    principalId: 'user',
    policyDocument: getPolicyDocument('Allow', params.methodArn),
    context: {
      scope: decoded.scope,
      id: decoded.id,
      provider: decoded.provider,
      tenant: decoded.tenantId,
    },
  };
};
