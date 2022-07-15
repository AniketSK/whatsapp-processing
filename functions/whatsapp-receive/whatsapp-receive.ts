import { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {

  console.log(`The body of the event is ${JSON.stringify(event)}.`);

  return {
    statusCode: 200
    // body: JSON.stringify({
    //   message: `Hello, ${name}!`,
    // }),
  }
}
