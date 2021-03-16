import React, {useState, useEffect } from "react";
import { goToAdmPage } from "../../Routes/Coordinator.js";
import { useHistory } from "react-router-dom";
import Form from "../../components/Form"
import styled from 'styled-components'

const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
`

const CreateTripPage = () => {
  
  const history = useHistory();


  return (
    <>
      <button onClick={() => goToAdmPage(history)}>Ir para página do Administrador</button>
      <Container>
        <Form/>
      </Container>
    </>
  );
};

export default CreateTripPage;