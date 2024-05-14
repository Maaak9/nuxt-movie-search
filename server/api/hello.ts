export default defineEventHandler(async(event) => {
  // return 'hello';
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return 'some text with 2000ms delay'
})