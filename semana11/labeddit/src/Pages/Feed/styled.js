import styled from 'styled-components'

export const HomeContainer =styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    flex-wrap:wrap;
    justify-content:space-around;
    gap: 5%;
`

export const Card = styled.div `
    display: flex;
    flex-direction:column;
    width: 400px;
    height: auto;
    margin: 2%;
    padding: 1%;
    border: 1px solid black;
    background-color: #ddd;
`

export const Header = styled.div `
    display: flex;
    width: inherit;
    height: 30px;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;

`
export const Body = styled.div `
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: justify;
    width: inherit;
    min-height: 100px;
    margin: 15px 0px 15px 0px;
`
export const Footer = styled.div `
    display: flex;
    width: inherit;
    height: 30px;
    border-top: 1px solid black;

`

