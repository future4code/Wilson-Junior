import React, { useEffect, useState, useContext} from 'react';
import  {Container, Box, Input, Button, ButtonForm } from './styled'
import { goToSubscribe } from '../../Router/Coordinator'
import { useHistory } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import BASE_URL from '../../Constants/url.js'
import axios from 'axios'

function Details() {

  const history = useHistory()

  const [form, onChange, clear] = useForm({email: "", password: ""})

  const onSubmitForm = (event) => {
    event.preventDefault()
    login()
  }

  const login = () => {
    axios.post (`${BASE_URL}login`, form)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))  
  }

  return(

  <Container>
    <Box>
    <h1>Login</h1>   
      <form onSubmit = {onSubmitForm}>  
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
        <ButtonForm type = {'submit'}> Login </ButtonForm>
      </form>
      <Button onClick={() => goToSubscribe(history)}> Cadastre-se </Button>
    </Box>
  </Container>
  )
}
  
export default Details;
