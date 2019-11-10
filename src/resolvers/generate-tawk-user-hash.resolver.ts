import * as firebase from 'firebase-admin'
import * as crypto from 'crypto'

const serviceAccount = JSON.parse(process.env.firebaseCertificate!)

// every configuration is set in an env variable for security reasons https://firebase.google.com/docs/admin/setup
const config = {
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: process.env.firebaseDbUrl,
}

const app = firebase.initializeApp(config)

export const generateTawkUserHash = async (obj: any, args: any, context: any) => {
  const user = await app.auth().getUser(context.event.requestContext.authorizer.userId)

  const email = user.email || user.providerData[0].email

  return crypto.createHmac('sha256', process.env.tawkApiKey!)
    .update(Buffer.from(email, 'utf-8'))
    .digest('hex')
}
