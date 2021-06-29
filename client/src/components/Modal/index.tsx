import React, { useEffect } from 'react'

import {
  ModalContainer,
  ModalMain,
  Header,
  Body,
  Image,
  Name,
  Types,
  Type,
  Stats,
  Info
} from './styles'

import { getColorFromType } from 'utils'

import { gql, useQuery } from '@apollo/client'

const GET_POKEMON_INFO = gql`
  query pokemon($id: Int!) {
    pokemon(id: $id) {
      id
      name
      height
      weight
      types {
        slot
        type {
          name
        }
      }
      stats {
        base_stat
        stat {
          name
        }
      }
    }
  }
`

import Bar from '../Bar'

interface Props {
  id: number
  setId: any
}

const Modal: React.FC<Props> = ({ id, setId }) => {
  const { data, loading, fetchMore } = useQuery(GET_POKEMON_INFO, {
    variables: { id },
    notifyOnNetworkStatusChange: true
  })
  return (
    <ModalContainer>
      {data && (
        <ModalMain color={getColorFromType(data?.pokemon?.types[0].type.name)}>
          <Header>
            <span>#{id.toString().padStart(3, '0')} </span>
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
              alt=""
            />
            <span onClick={() => setId(0)} style={{ cursor: 'pointer' }}>
              x
            </span>
          </Header>
          <Body>
            <Name>{data?.pokemon?.name}</Name>
            <Types>
              {data?.pokemon?.types.map((item: any) => (
                <Type key={item.slot} color={getColorFromType(item.type.name)}>
                  {item.type.name}
                </Type>
              ))}
            </Types>
            <Types>
              <Info>
                {data?.pokemon?.height}M <span>altura</span>
              </Info>
              <Info>
                {data?.pokemon?.weight}KG<span>peso</span>
              </Info>
            </Types>

            <Stats>
              <p>Status Base</p>
              <Bar
                color={'#6390F0'}
                width={'300px'}
                value={data?.pokemon?.stats[0].base_stat}
                type={'HP'}
                max={100}
              />
              <Bar
                color={'#C22E28'}
                width={'300px'}
                value={data?.pokemon?.stats[1].base_stat}
                type={'ATK'}
                max={100}
              />

              <Bar
                color={'#B7B7CE'}
                width={'300px'}
                value={data?.pokemon?.stats[2].base_stat}
                type={'DEF'}
                max={100}
              />
              <Bar
                color={'#ff7979'}
                width={'300px'}
                value={data?.pokemon?.stats[3].base_stat}
                type={'SATK'}
                max={100}
              />
              <Bar
                color={'#ff7979'}
                width={'300px'}
                value={data?.pokemon?.stats[4].base_stat}
                type={'SDEF'}
                max={100}
              />
              <Bar
                color={'#F7D02C'}
                width={'300px'}
                value={data?.pokemon?.stats[5].base_stat}
                type={'ASPD'}
                max={100}
              />
            </Stats>
          </Body>
        </ModalMain>
      )}
    </ModalContainer>
  )
}

export default Modal
