import React, { useEffect, useState, useContext} from 'react';
import  {Container, Box, Input, Button } from './styled'
import GlobalStateContext from '../../Global/Contexts/GlobalStateContext'
import { goToSubscribe } from '../../Router/Coordinator'
import { useHistory } from 'react-router-dom'

function Details() {

  const history = useHistory()



  return(

  <Container>
    <Box>
      <Input
        placeholder = 'Email'
        type = 'e-mail'

      />
      <Input
        placeholder = 'Senha'
        type = 'password'
      />
      <Button type = 'submit'> Login </Button>
      <Button
        onClick={() => goToSubscribe(history)}
      > Cadastrar </Button>
    </Box>
  </Container>
  )
}
  
export default Details;
