import Styled from 'styled-components'

export const Container = Styled('div')<{ width: string }>`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
span {
 width: 100px;
 text-align: left;
}
progress{
  height: 100%;
}

progress[value] {
  width: 100%;

  -webkit-appearance: none;
  appearance: none;
}

progress[value]::-webkit-progress-bar {
  height: 10px;
  border-radius: 20px;
  background-color: #eee;
}  

progress[value]::-webkit-progress-value {
  height: 10px;
  border-radius: 20px;
  background-color: ${(props) => props.color};
}
`
