import { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
  // const { name = 'stranger' } = event.queryStringParameters

  const eventBody = JSON.parse(event.body);
  console.log(`The body of the event is ${eventBody}.`);
  console.log(`The query params are ${event.queryStringParameters}`)

  return {
    statusCode: 200,
    // body: JSON.stringify({
    //   message: `Hello, ${name}!`,
    // }),
  }
}
