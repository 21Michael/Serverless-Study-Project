'use strict';

const gainLambda = async (event, context, callback) => {
  const { id } = event.pathParameters;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'GET: message succeed!',
        idParam: id,
      },
      null,
      2
    ),
  };
};

module.exports = { gainLambda };
