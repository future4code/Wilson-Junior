
import styled from 'styled-components'

export const MatchesList = styled.div `
  display:flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  text-align: center;
`
export const Item = styled.div `
  display:flex;
  width: 90%;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid black;
  overflow: hidden;
  padding: 5px;

  img {
    width: 50px;
    height:50px;
    border-radius: 50%;
    padding: 5px;
    margin-right: 5px;
  }
`
