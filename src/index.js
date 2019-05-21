const { ApolloServer } = require('apollo-server')
const { typeDefs, resolvers } = require('./EDIT')
const axios = require('axios')

const runServer = async () => {
  try {
    const response = await axios.get(
      'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
    )
    const pokemon = response.data.pokemon
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: () => ({ pokemon }),
    })

    server.listen().then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`)
    })
  } catch (error) {
    throw new Error(error)
  }
}

runServer()
