const { gql } = require('apollo-server')

// The GraphQL schema
const typeDefs = gql`
  type Pokemon {
    id: ID!
    name: String!
    type: [String!]!
    weaknesses: [String!]!
  }

  type Query {
    pokemonMany: [Pokemon!]
  }
`

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    pokemonMany: (parent, args, context, info) => context.pokemon,
  },
}

module.exports = {
  typeDefs,
  resolvers,
}
