import styled from 'styled-components'

export const HeaderBar = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid black;
    width: 100%;
    height: 10%;
    overflow: hidden;

    img {
        width: 40%;
        height: 300%;
        margin: 20%;
    }

    input{
        width: 10%;
        height: 85%;
        margin: 5%;
        background-color:transparent;
        border-radius: 50%;
        cursor: pointer;
        outline: 0;
    }

    input:hover{
        width: 8%;
        height: 70%;
        border:1px solid rgb(235, 151, 136);
    }
`

export default HeaderBar