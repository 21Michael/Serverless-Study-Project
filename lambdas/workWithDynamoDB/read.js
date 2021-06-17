const AWS = require('aws-sdk');
const client = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

const readFromDB = async (event, context, callback) => {
  const { id } = event.pathParameters;
  const params = {
    TableName: 'test-serverless',
    Key: { id }
  };

  try {
    const data = await client.get(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Read data from DB succeed!',
          ...data.Item
        },
        null,
        2
      ),
    };
  }
  catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify(
        {
          message: e.message,
        },
        null,
        2
      ),
    };
  }

};

module.exports = { readFromDB };