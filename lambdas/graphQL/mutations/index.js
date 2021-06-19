const AWS = require('aws-sdk');
const client = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });
const uuid = require('uuid');

const mutations = {
  postData: async (_, { name, age, reffer, interests, how, rating }) => {
    const Item = {
      id: uuid.v4(),
      name,
      age,
      reffer,
      interests,
      how,
      rating
    };
    const params = {
      TableName: 'test-serverless',
      ReturnValues: "ALL_OLD",
      Item
    };

    await client.put(params).promise();
    return "Success!";
  },
};

module.exports = { mutations };