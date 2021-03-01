import React from 'react';
import  {Container, Box, Input, Button, ButtonForm } from '../Login/styled'
import { goToLogin } from '../../Router/Coordinator'
import { useHistory } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import useUnprotectedPage from '../../Hooks/useUnprotectedPage';
import BASE_URL from '../../Constants/url.js'
import axios from 'axios'

function Subscribe() {
  
  const history = useHistory()

  useUnprotectedPage()

  const [form, onChange, clear] = useForm({username: "", email: "", password: ""})

  const onSubmitForm = (event) => {
    event.preventDefault()
    signUp(form)
  }

  const signUp = (body) => {
    axios.post (`${BASE_URL}/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      clear()
      goToLogin(history)
    })
    .catch((err) => alert('Erro no Cadastro'))  
  }


  return (
    <Container>
      <Box>
        <h1>Subscribe</h1> 
        
        <form onSubmit = {onSubmitForm}>
          <Input
            name = 'username'
            value = {form.username}
            onChange = {onChange}
            placeholder = 'E-mail'
            placeholder = 'Nome'
            type = 'text'
            required

          />
          <Input
            name = 'email'
            value = {form.email}
            onChange = {onChange}
            placeholder = 'E-mail'
            type = 'email'
            required
          />
          <Input
            name = 'password'
            value = {form.password}
            onChange = {onChange}
            placeholder = 'Senha'
            type = 'password'
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
