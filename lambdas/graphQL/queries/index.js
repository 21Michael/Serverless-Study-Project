const AWS = require('aws-sdk');
const client = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

const queries = {
  getData: async (_, { id }) => {
    const params = {
      TableName: 'test-serverless',
      Key: { id }
    };

    const data = await client.get(params).promise();
    if(!data.Item) throw new Error('No data by current id!!!');
    return { ...data.Item };
  },
};

module.exports = { queries };