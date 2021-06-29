import React, { useEffect, useState } from 'react'
import { GlobalStyle } from './style-guide/GlobalStyle'
import PokemonList from 'components/PokemonList'
import * as S from './styles'
import { gql, useQuery } from '@apollo/client'

const GET_POKEMONS_INFO = gql`
  query pokemons($next: String!) {
    pokemons(next: $next) {
      results {
        id
        name
      }
      count
      next
    }
  }
`

const App = () => {
  const { data, loading, fetchMore } = useQuery(GET_POKEMONS_INFO, {
    variables: { next: '' },
    notifyOnNetworkStatusChange: true
  })
  console.log(data)
  const [results, setResults] = useState<any>([])
  const [count, setCount] = useState(0)
  const [next, setNext] = useState('')

  useEffect(() => {
    if (data) {
      const { results, count, next } = data.pokemons
      setResults(results)
      setCount(count)
      setNext(next)
    }
  }, [data])

  return (
    <>
      <GlobalStyle />
      <S.Container>
        <S.Header>
          <PokemonList
            pokemons={results}
            loading={loading}
            fetchMore={() => {
              if (count > results.length)
                fetchMore({
                  variables: {
                    next: next
                  },
                  updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev
                    const {
                      results: newResults,
                      count,
                      next
                    } = fetchMoreResult.pokemons
                    setResults([...results, ...newResults])
                    setCount(count)
                    setNext(next)
                  }
                })
            }}
          />
          {loading && <p>Carregando ...</p>}
        </S.Header>
      </S.Container>
    </>
  )
}

export default App
