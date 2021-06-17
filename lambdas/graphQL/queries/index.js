const AWS = require('aws-sdk');
const client = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });
const { UserInputError } = require('apollo-server-lambda');

const queries = {
  hello: async (_, { id }) => {
    const params = {
      TableName: 'test-serverless',
      Key: { id }
    };

    return await client.get(params).promise()
      .then((data) => {
        return { ...data.Item };
      })
      .catch(err => {
        throw new Error(err.message);
      });
  },
};

module.exports = { queries };