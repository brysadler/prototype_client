import React, { Component } from 'react'
import { Login_Container, Title, Input, LoginForm, RememberCheck, RememberMe, LoginFoot, AnchorRight, AnchorLeft, Error } from '../media/Login'
import Button from './button'
import { loginUser } from "../actions/initActions"
import { modalRegister } from "../actions/viewActions"
import { connect } from 'react-redux'

class LoginContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  register = () => {
    console.log('linking account')
    this.props.modalRegister()
  }

  onSubmit = (e) => {
    e.preventDefault()

    const creds = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.loginUser(creds)
  }

  render () {
    return (
      <Login_Container>
        <Title>Welcome!</Title>
        {!this.props.validate.isValidated && <Error>{this.props.validate.message}</Error>}
        <LoginForm
          onSubmit={this.onSubmit}
        >
          <Input
            name='email' placeholder="Email" onChange={this.onChange} type='text' value={this.state.email}
          />
          <Input
            name='password' placeholder="Password" onChange={this.onChange} type='password' value={this.state.password}
          />
          <RememberMe>Remember Me
            <RememberCheck
              name='rememberMe' type='checkbox'
            />
          </RememberMe>
          <br/>
          <Button
            text='LOGIN' type='submit'
          />
          <br/>
          <LoginFoot>
            <AnchorRight>ForgotPassword</AnchorRight>
            <AnchorLeft onClick={this.register}>Register</AnchorLeft>
          </LoginFoot>
        </LoginForm>
      </Login_Container>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  validate: state.auth.valid
})

export default connect(mapStateToProps, { loginUser, modalRegister })(LoginContainer)