const { createLambda } = require('./create');
const { gainLambda } = require('./gain');
const { api } = require('./api');
const { readFromDB } = require('./workWithDynamoDB/read');
const { addToDB } = require('./workWithDynamoDB/add');
const { graphQLServer } = require('./graphQL');

module.exports = { createLambda, gainLambda, api, readFromDB, addToDB, graphQLServer };