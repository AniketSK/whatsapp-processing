import { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
  const resultOfChallenge = event.queryStringParameters["hub.challenge"]

  // const eventBody = JSON.parse(event.body);
  console.log(`The body of the event is ${event}.`);
  console.log(`The query params are ${event.queryStringParameters}`)

  return {
    statusCode: 200,
    body : resultOfChallenge
    // body: JSON.stringify({
    //   message: `Hello, ${name}!`,
    // }),
  }
}
