import styled from 'styled-components'

export const FooterBar = styled.div `
    display: flex;
    align-self: center;
    justify-content: space-between;
    margin-bottom: 10%;
    width: 90%;
    height: 10%;
    overflow: hidden;
  
   input {
    width: 13%;
    height: 80%;
    margin: auto;
    background-color:transparent;
    border-radius: 50%;
    cursor: pointer;
    outline: 0;
  }
  
  input:hover{
    border: 2px solid rgb(233, 119, 98);
    width: 12%;
    height: 70%;
  }
`

export default FooterBar
