import { mergeTypeDefs } from '@graphql-tools/merge'

import pokemonTypeDefs from './pokemon'

export default mergeTypeDefs([
  pokemonTypeDefs
])
