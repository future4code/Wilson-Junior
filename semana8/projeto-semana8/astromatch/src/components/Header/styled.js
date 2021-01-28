import styled from 'styled-components'

export const HeaderBar = styled.div `
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid black;
    width: 100%;
    height: 10%;
    overflow: hidden;

    img {
        width: 40%;
        height: 350%;
        margin-top:-65px;
        margin-left: 25%;
    }

    input{
        width: 10%;
        height: 85%;
        margin: auto;
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