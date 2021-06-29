import styled from 'styled-components'

import { AiOutlineInfoCircle } from 'react-icons/ai'

export const Container = styled.div`
  background: #eef0f5;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10%;
`

export const List = styled.div`
  min-height: 100vh;
  padding: 10%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`

export const Item = styled.div`
  text-transform: capitalize;
  background: #fff;
  color: #282c34;
  padding: 1%;
  width: 30%;
  border-radius: 2.5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 0px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 6px 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;
  @media (max-width: 768px) {
    width: 45%;
    font-size: 14px;
  }
`

export const Button = styled.button`
  cursor: pointer;
  text-transform: capitalize;
  font-size: 16px;
  background: #fff;
  background-color: #282c34;
  color: #eef0f5;
  padding: 1%;
  width: 30%;
  border-radius: 2.5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 0px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 6px 2px;
  display: flex;
  justify-content: center;
`

export const Icon = styled(AiOutlineInfoCircle)`
  cursor: pointer;
`
