const AWS = require('aws-sdk');
const client = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

const addToDB = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: 'usersTable',
    Item: {
      id: String(Math.floor(Math.random() * 100) + 1),
      time: (new Date()).toISOString(),
      ...data
    }
  };

  const response = await client.put(params, (err, data) => {
    if(err) console.log(err);
    return true;
  }).promise();


  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Add data to DB succeed!',
        response
      },
      null,
      2
    ),
  };
};

module.exports = { addToDB };