import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Form/Input'
import Button from '../Form/Button'


const LoginForm = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    fetch('https://www.dogsapi.origamid.dev/json/jwt-auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(json => {
        console.log(json)
      })
  }

  return (
    <section>
      <h1>Login titulo</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" />
        <Input label="Senha" type="password" name="password" />

        <Button disabled >Entrar</Button>

      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm
