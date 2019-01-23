import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import ANCESTER from "../Assets/img/blanco-logo-1.svg"

export default class LoginContainer extends Component {
  render() {
    return (
      <div>
          <LoginForm />
      </div>
    )
  }
}

const LoginForm = () => (
  <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 90%;
        border-radius: 25px;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '100%', marginTop: '3em', borderRadius: "25px" }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450, background: "#081B24FF" }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src={ANCESTER} /> Login
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='ID' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Contraseña'
              type='password'
            />

            <Button color='teal' fluid size='large'>
              INGRESAR
            </Button>
          </Segment>
        </Form>
        <Message>
          ¿Nuevo por acá? <a href='google.com' >Inscríbete</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)
