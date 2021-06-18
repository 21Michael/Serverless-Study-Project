const { gql } = require('apollo-server-lambda');

const typeDefs = gql`
  type Data {
    id: String
    data: String
    time: String
  }
  type Query {
    getData(id: String!): Data
  }
  type Mutation {
    postData(data: String!): Data
  }
`;

module.exports = { typeDefs };