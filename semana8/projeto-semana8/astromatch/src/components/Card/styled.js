import styled from 'styled-components'

export const CardBox = styled.div `
  display:flex;
  flex-direction:column;
  justify-content: center;
  justify-items:flex-end; 
  text-align: center;
  width: 80%;
  height: 50%;
  border-radius: 10%;
  margin: 10%;

  img {
    width: 100%;
    height:100%;
    border-radius: 20%;
  }
`

export default CardBox