import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100vw;
    height: auto;
    text-align: center;

    @media(max-width: 800px){

    }
`

export const Box = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: 12px;
    box-shadow: 6px 7px 3px #8d93ab;
    width: 38%;
    height: 65vh;
    border-radius: 5%;
    background-color: #d6e0f0;
    text-align: center;
    margin-top: 5%;
    padding: 1%;

    @media(max-width: 800px){
        width: 300px;
        height: auto;
    }

    @media(max-width: 430px){
        width: 90%;
        height: 70vh;
    }   
`
export const Input = styled.input `
    width: 30vw;
    height: 5vh;
    text-align: center;
    border-radius: 25px;
    outline: none;
    border: 1px solid #ddd;
    margin: 10px;

    @media(max-width: 430px){
        width: 80%;
        height: 30%;
    }
`

export const ButtonForm = styled.button `
    outline: none;
    border: 1px solid #ddd;
    width: 100px;
    height: 30px;
    border-radius: 10px;
    background-color: #fff;

    :hover{
        background-color: #51c2d5;
        cursor: pointer;
    }

    @media(max-width: 430px){
        width: 20%;
        height: 30px;
    }
`

export const Button = styled.button `
    outline: none;
    border: 1px solid #ddd;
    width: 200px;
    height: 30px;
    border-radius: 10px;
    background-color: transparent;
    margin-top: 5%;

    :hover{
        text-decoration: underline;
        cursor: pointer;
    }

    @media(max-width: 430px){
        width: 30%;
        height: 30px;
        margin-top: 15%;
    }

`
