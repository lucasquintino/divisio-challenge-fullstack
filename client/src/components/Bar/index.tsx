// 1. It should show the progress
// 2. Show the percentage of completion in text
// 3. Color, width

// <ProgressBar color={"#ff7979"} width={"150px"} value={value} max={100} />

import React from 'react'

import { Container } from './styles'

interface Props {
  value: number
  type: string
  max: number
  color: string
  width: string
}
const Bar: React.FC<Props> = ({ value, max, color, width, type }) => {
  return (
    <Container color={color} width={width}>
      <span>{type}</span>
      <progress value={value} max={max} />
    </Container>
  )
}

export default Bar
