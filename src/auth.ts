import * as firebase from 'firebase-admin'

const serviceAccount = JSON.parse(process.env.firebaseCertificate!)

// every configuration is set in an env variable for security reasons https://firebase.google.com/docs/admin/setup
const config = {
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: process.env.firebaseDbUrl,
}

const app = firebase.initializeApp(config)

/**
 * Function used to build the authorization response in the Lambda way
 * attacching the necessary info (policy, statement, principalId)
 */
const generatePolicy = (principalId: any, effect: string, resource: string) => {
  const authResponse: any = {}
  if (effect && resource) {
    const policyDocument: any = {}
    policyDocument.Version = '2012-10-17'
    policyDocument.Statement = []
    const statementOne: any = {}
    statementOne.Action = 'execute-api:Invoke'
    statementOne.Effect = effect
    statementOne.Resource = resource
    policyDocument.Statement[0] = statementOne
    authResponse.policyDocument = policyDocument
  }
  if (principalId.devMessage) {
    authResponse.context = principalId
  } else {
    authResponse.principalId = principalId
    authResponse.context = {
      userId: principalId,
    }
  }
  return authResponse
}

/**
 * This lambda function is used as `authorizer`.
 * It handles the authentication with firebase and its job is to authenticate each and every call.
 * Set it in the 'authorize' field in serverless.yml
 */
export const authenticate = async (event: any, context: any) => {
  context.callbackWaitsForEmptyEventLoop = false

  if (!event.authorizationToken) {
    // No authorization token
    throw new Error('Missing authorization token.')
  }

  const tokenParts = event.authorizationToken.split(' ')
  const tokenValue = tokenParts[1]

  if (!(tokenParts[0].toLowerCase() === 'bearer' && tokenValue)) {
    throw new Error('Malformed authorization token.')
  }

  try {
    // Verify the token and check if it's been revoked
    const decodedToken = await app.auth().verifyIdToken(tokenValue, true)

    // Sub is the firebase field containing the user/device id
    return generatePolicy(decodedToken.sub, 'Allow', event.methodArn)
  } catch (err) {
    console.log('catch error. Invalid token', err)
    throw new Error('There are some issues with your auth token.')
  }
}

export const auth = (event: any, context: any) => {
  console.log(event)
  return authenticate(event, context)
}
