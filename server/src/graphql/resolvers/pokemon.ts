const fetch = require('node-fetch')

export default {
  Query: {
    pokemons: async (_, { next }) => {
      var response
      if (next) response = await fetch(next)
      else response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=18`)
      const json = await response.json()
      var { results, count, next } = json

      //adjusting results to show id field
      results = results.map((item) => {
        return { ...item, id: item.url.match(/^\d+|\d+\b|\d+(?=\w)/g)[1] }
      })
      return { results, count, next }
    },
    pokemon: async (_, { id }) => {
      const response = await fetch(`http://pokeapi.co/api/v2/pokemon/${id}`)

      return response.json()
    }
  }
}
