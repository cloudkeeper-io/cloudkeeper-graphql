export const checkError = (response: any) => {
  if (response.errorMessage) {
    console.log(`Lambda error ${response.errorMessage}`)
    throw new Error(response.errorMessage)
  }
}
