import React from "react";
import { useHistory } from "react-router-dom";
import { goToLoginPage, goToAdmPage } from "../../Routes/Coordinator.js";
import styled from 'styled-components';

const Container = styled.div `
  display: flex;
  justify-content: space-around;
  margin-top: 10%;
  padding: 10px;  
`
const Button = styled.button `
  font-family: arial;
  color: #FFFFFF !important;
  font-size: 17px;
  text-shadow: 3px 4px 3px #7CACDE;
  box-shadow: 1px 1px 2px #BEE2F9;
  padding: 28px 29px;
  border-radius: 10px;
  border: 2px solid #3866A3;
  background: #A9BBEE;
  background: linear-gradient(to top, #A9BBEE, #0061CF);
  :hover {
  color: #D9E7FF !important;
  background: #63C1CF;
  background: linear-gradient(to top, #63C1CF, #94EEEB);
  }
`
const HomePage = () => {
  const history = useHistory();

  return (
    <>
      <Container>  
      <Button onClick={() => goToAdmPage(history)}>
        Administrador
      </Button>

      <Button onClick={() => goToLoginPage(history)}>
        Viajante
      </Button>
      </Container>
    </>
  );
};

export default HomePage;