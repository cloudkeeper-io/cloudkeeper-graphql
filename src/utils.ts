export const checkError = (response: any) => {
  if (response.errorMessage) {
    // eslint-disable-next-line no-console
    console.log(`Lambda error ${response.errorMessage}`)
    throw new Error(response.errorMessage)
  }
}
