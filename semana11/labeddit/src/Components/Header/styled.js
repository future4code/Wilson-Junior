import styled from 'styled-components'

export const Container = styled.div`
    display:grid;
    grid-template-columns: 1fr 3fr 1fr;
    align-items: center;
    width: 100%;
    height: auto;
    border-bottom: 1px solid #ddd;
    box-shadow: 1px;

    @media(max-width: 800px){

    }
`

export const Search = styled.input `
    width: 600px;
    height: 35px;
    text-align: center;
    outline: none;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #f6f5f5;
    margin: auto;

    @media(max-width: 800px){
    display: none;
    width: 100%;
    height: auto;
    }
`

export const Button = styled.button `
    outline: none;
    border: 1px solid #ddd;
    width: 100px;
    height: 30px;
    border-radius: 10px;
    background-color: #fff;
    margin: 10px;

    :hover{
        background-color: #eb5e0b;
    }
`
export const Logo = styled.div `
    text-align: center;
    border: 1px solid #ddd;
    width: 100px;
    height: 30px;
    border-radius: 10px;
    background-color: #fff;
    margin: 10px;

    :hover{
        background-color: #51c2d5;
    }
`
