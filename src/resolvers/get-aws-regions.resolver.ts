import { EC2 } from 'aws-sdk'
import { map } from 'lodash'

const ec2 = new EC2()

export const getAwsRegions = async () => {
  return map((await ec2.describeRegions().promise()).Regions, 'RegionName')
}
