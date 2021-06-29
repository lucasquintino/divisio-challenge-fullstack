import React, { useState } from 'react'

import { Container, Item, List, Icon, Button } from './styles'

import Modal from '../Modal'

interface Pokemon {
  id: number
  name: string
}

interface Props {
  pokemons: Pokemon[]
  fetchMore: any
  loading: boolean
}

const PokemonList: React.FC<Props> = ({ pokemons, fetchMore, loading }) => {
  console.log(pokemons)

  const [id, setId] = useState(0)

  return (
    <Container>
      <List>
        {pokemons.map((item) => (
          <Item key={item.id}>
            <span>#{item.id.toString().padStart(3, '0')} </span>
            <span>{item.name} </span>
            <Icon
              onClick={() => {
                setId(item.id)
              }}
            />
          </Item>
        ))}
      </List>
      <Button disabled={loading} onClick={fetchMore}>
        Carregar mais...
      </Button>
      {id && <Modal id={id} setId={setId} />}
    </Container>
  )
}

export default PokemonList
