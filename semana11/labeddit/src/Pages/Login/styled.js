import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    text-align: center;

    @media(max-width: 800px){
    flex-direction: column;
    width: 100vw;
    height: auto;
    margin-bottom: 5%;
    }
`

export const Box = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    box-shadow: 6px 7px 3px #8d93ab;
    width: 500px;
    height: 400px;
    border-radius: 5%;
    background-color: #d6e0f0;
    text-align: center;

    @media(max-width: 800px){
    flex-direction: column;
    width: 100vw;
    height: auto;
    margin-bottom: 5%;
    }   
`

export const Input = styled.input `
    width: 400px;
    height: 30px;
    text-align: center;
    border-radius: 25px;
    outline: none;
    border: 1px solid #ddd;
`

export const Button = styled.button `
    outline: none;
    border: 1px solid #ddd;
    width: 100px;
    height: 30px;
    border-radius: 10px;
    background-color: #fff;

    :hover{
        background-color: #51c2d5;
    }

`
