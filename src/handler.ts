import { ApolloServer } from 'apollo-server-lambda';
import { Handler } from 'aws-lambda';
import * as Logger from 'bunyan';
import { authenticate } from './auth';

import schema from './schema';
import resolvers from './setup-resolvers';

export interface IContext {
  log: Logger;
  systemId: string;
  userId: string;
}

const log = Logger.createLogger({
  level: process.env.loglevel || 'DEBUG',
  name: 'report-metadata-api',
} as Logger.LoggerOptions);

export const auth = (event: any) => {
  console.log(event)
  return authenticate(event);
};

const server = new ApolloServer({
  resolvers,
  typeDefs: schema as any,
  context: ({ event, context }: any) => {
    // add logger for child
    const config: any = {
      log: log.child({ schema: 'schema' }),
    };

    return { ...config, event, context };
  },
});

export const handler: Handler = server.createHandler({ cors: { origin: '*', credentials: true } });
