import React, {useContext, useEffect} from 'react';
import  {Container, Box, Input, Button } from '../Login/styled'
import GlobalStateContext from '../../Global/Contexts/GlobalStateContext'
import { goToLogin } from '../../Router/Coordinator'
import { useHistory } from 'react-router-dom'

function Subscribe() {
  
  const history = useHistory()


  return (
    <Container>
          <Box>
      <Input
        placeholder = 'Nome'
        type = 'text'

      />
      <Input
        placeholder = 'E-mail'
        type = 'email'
      />
      <Input
        placeholder = 'Senha'
        type = 'password'
      />
      <Button> Enviar </Button>
      <Button
        onClick={() => goToLogin(history)}
      > Voltar </Button>
    </Box>
    </Container>
  )
}

export default Subscribe;
