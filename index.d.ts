declare module '*.json';
declare module 'aws-xray-sdk-core'
declare module 'aws-xray-sdk' {
  const def: any
  export const enableManualMode: any
  export const captureAWS: any
  export const captureAWSClient: any
  export const Segment: any
  export default def
}
