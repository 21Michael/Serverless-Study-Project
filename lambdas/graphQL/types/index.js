const { gql } = require('apollo-server-lambda');

const typeDefs = gql`
    type Data {
        id: String
        data: String
        time: String
    }
    type Query {
        hello(id: String!): Data
    }
`;

module.exports = { typeDefs };