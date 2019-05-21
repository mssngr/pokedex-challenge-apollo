# Apollo Pokédex Challenge

## Instructions

1. Using this existing Apollo Server repo start the dev server with `npm run dev`.
2. The source data you will be using is already fetched and added to the GraphQL "context," ready to be used by the resolvers.
3. The resolver code is found in the `EDIT.js` file.
4. There already exists a `pokemonMany` resolver that lists all of the pokemon. Create a `pokemonOne` resolver that takes an `id` argument and returns a single pokemon.
5. Add new arguments to the `pokemonMany` resolver for `type` and `weaknesses` and filter the resulting pokemon list by these values.
6. Add a `searchTerm` argument to the `pokemonMany` resolver and try to match the pokemons' `name` fields to it, returning all the matches. Make this compatible with the `type` and `weaknesses` filters, so that all three arguments narrow the search.
