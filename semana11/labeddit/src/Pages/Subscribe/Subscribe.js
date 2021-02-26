import React, {useContext, useEffect} from 'react';
import  {Container, Box, Input, Button, ButtonForm } from '../Login/styled'
import GlobalStateContext from '../../Global/Contexts/GlobalStateContext'
import { goToLogin } from '../../Router/Coordinator'
import { useHistory } from 'react-router-dom'
import useForm from '../../Hooks/useForm'

function Subscribe() {
  
  const history = useHistory()

  const [form, onChange, clear] = useForm({username: "", email: "", password: ""})

  const onSubmitForm = (event) => {
    event.preventDefault()
  }


  return (
    <Container>
      <Box>
        <h1>Subscribe</h1> 
        
        <form onSubmit = {onSubmitForm}>
          <Input
            name = {'username'}
            value = {form.username}
            onChange = {onChange}
            placeholder = {'E-mail'}
            placeholder = 'Nome'
            type = 'text'
            required

          />
          <Input
            name = {'email'}
            value = {form.email}
            onChange = {onChange}
            placeholder = {'E-mail'}
            type = {'email'}
            required
          />
          <Input
            name = {'password'}
            value = {form.password}
            onChange = {onChange}
            placeholder = {'Senha'}
            type = {'password'}
            required
          />
          <ButtonForm type = {'submit'}> Enviar </ButtonForm>
        </form>
        
        <Button
          onClick={() => goToLogin(history)}
        > Voltar </Button>
    </Box>
    </Container>
  )
}

export default Subscribe;
