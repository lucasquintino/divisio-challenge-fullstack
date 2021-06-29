import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: block;
  background-color: ${(props) => props.color};
`

export const ModalMain = styled.div`
  position: fixed;
  width: 40%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.color};
  @media (max-width: 768px) {
    width: 80%;
  }
`

export const Header = styled.div`
  height: 35vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  span {
    margin: 5% 0;
    width: 25%;
  }
`

export const Body = styled.div`
  background: #fafafa;
  height: 60vh;
  color: #282c34;
  padding: 0 5%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px -0.5px 10px 0px,
    rgba(60, 64, 67, 0.15) 0px 10px 16px 2px;
  @media (max-width: 400px) {
    height: 40vh;
  }
`

export const Image = styled.img`
  width: 50%;
  height: 110%;
`

export const Name = styled.div`
  text-transform: capitalize;
  padding-top: 5%;
  padding-bottom: 2.5%;
`

export const Types = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const Type = styled.div`
  text-transform: capitalize;
  background-color: ${(props) => props.color};
  color: white;
  width: 150px;
  padding: 1% 2.5%;
  margin-bottom: 2.5%;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 0px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 6px 2px;
`

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  p {
    margin: 0;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  span {
    font-size: 14px;
    color: #667;
  }
`
