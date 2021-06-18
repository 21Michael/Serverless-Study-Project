const AWS = require('aws-sdk');
const client = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

const mutations = {
  postData: async (_, { data }) => {
    const Item = {
      id: String(Math.floor(Math.random() * 100) + 1),
      time: (new Date()).toISOString(),
      data
    };
    const params = {
      TableName: 'test-serverless',
      ReturnValues: "ALL_OLD",
      Item
    };

    await client.put(params).promise();

    return { id: Item.id };
  },
};

module.exports = { mutations };