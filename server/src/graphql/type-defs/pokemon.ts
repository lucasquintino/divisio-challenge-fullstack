import { gql } from 'apollo-server-express'

export default gql`
  type Type {
    name: String
  }
  type TypeObj {
    slot: Int
    type: Type
  }
  type Stat {
    name: String
  }
  type StatsObj {
    base_stat: Int
    stat: Stat
  }
  type Pokemon {
    id: Int
    name: String
    height: Int
    weight: Int
    types: [TypeObj]
    stats: [StatsObj]
  }
  type Pokemons {
    results: [Pokemon]
    count: Int
    next: String
  }

  type Query {
    pokemons(next: String!): Pokemons
    pokemon(id: Int!): Pokemon
  }
`
