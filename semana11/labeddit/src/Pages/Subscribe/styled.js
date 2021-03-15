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