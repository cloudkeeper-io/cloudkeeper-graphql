import { lambdaResolver } from './common'

export const getCostsData = async (obj: any, args: any, context: any) => {
  return lambdaResolver(args, context, `cloudkeeper-metrics-service-${process.env.stage}-get-costs-summary`)
}
