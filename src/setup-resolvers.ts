import * as GraphQLJSON from 'graphql-type-json';
import {
  getDashboardData,
} from './resolvers';

export default {
  JSON: GraphQLJSON,
  Query: {
    dashboardData: getDashboardData,
  },
};
