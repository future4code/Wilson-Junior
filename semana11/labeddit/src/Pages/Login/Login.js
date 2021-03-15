import React from 'react';
import  {Container, Box, Input, Button, ButtonForm } from './styled'
import { goToPost, goToSubscribe } from '../../Router/Coordinator'
import { useHistory } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import BASE_URL from '../../Constants/url.js'
import axios from 'axios'
import useUnprotectedPage from '../../Hooks/useUnprotectedPage';

function Login() {

  const history = useHistory()

  useUnprotectedPage()

  const [form, onChange, clear] = useForm({email: "", password: ""})

  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form)
  }

  const login = (body) => {
    axios.post (`${BASE_URL}/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      console.log(res.data)
      clear()
      goToPost(history)
    })
    .catch((err) => alert('Erro de login'))  
  }

  return(

  <Container>
    <Box>
    <h1>Login</h1>   
      <form onSubmit = {onSubmitForm}>  
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
        <ButtonForm type = {'submit'}> Login </ButtonForm>
      </form>
      <Button onClick={() => goToSubscribe(history)}> Cadastre-se </Button>
    </Box>
  </Container>
  )
}
  
export default Login;
