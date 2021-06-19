const { gql } = require('apollo-server-lambda');

const typeDefs = gql`
  type Data {
    id: ID!
    name: String
    age: Int
    reffer: String
    interests: [String]
    how: Int
    rating: Int
  }
  type Query {
    getData: [Data]
  }
  type Mutation {
    postData(name: String!, age: Int!, reffer: String!, interests: [String]!, how: Int!, rating: Int!): String 
  }
`;

module.exports = { typeDefs };