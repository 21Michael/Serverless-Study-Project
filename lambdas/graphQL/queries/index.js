const AWS = require('aws-sdk');
const client = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

const queries = {
  getData: async () => {
    const params = {
      TableName: 'test-serverless',
    };

    const data = await client.scan(params).promise();
    if(!data.Items.length) throw new Error('No data!!!');
    return data.Items;
  },
};

module.exports = { queries };