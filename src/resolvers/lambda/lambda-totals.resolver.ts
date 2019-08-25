import { lambdaResolver } from '../common'

export const getLambdaTotals = async (obj: any, args: any, context: any) => {
  return lambdaResolver(args, context, `cloudkeeper-metrics-service-${process.env.stage}-get-lambda-totals`)
}
