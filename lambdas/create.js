'use strict';

const createLambda = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  const queryParam = event.queryStringParameters;
  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify(
      {
        message: 'Message succeed!',
        sentData: data,
        queryParam
      },
      null,
      2
    ),
  });
};

module.exports = { createLambda };