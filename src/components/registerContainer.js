import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerUser } from "../actions/initActions"
import { Input, Error } from '../media/Login'
import { Register_Container, Register_Title, RegisterForm } from "../media/Register"
import Button from './button'


class RegisterContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      verifyPassword: '',
      dob: ''
    }
  }

  componentWillMount () {
    this.props.validate.isValidated = true
    console.log('mounting..TODO add animation here')
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()

    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      verifyPassword: this.state.verifyPassword,
      dob: this.state.dob
    }
    // call action
    this.props.registerUser(user)
  }

  //TODO rename these tags so they become agnostic to the component
  render () {
    return (
      <Register_Container>
        <Register_Title>Register</Register_Title>
        {!this.props.validate.isValidated && <Error>{this.props.validate.message}</Error>}
        <RegisterForm onSubmit={this.onSubmit}>
          <Input
            name='firstName' placeholder="First Name" onChange={this.onChange} type='text' value={this.state.firstName}
          />
          <Input
            name='lastName' placeholder="Last Name" onChange={this.onChange} type='text' value={this.state.lastName}
          />
          <Input
            name='email' placeholder="Email" onChange={this.onChange} type='text' value={this.state.email}
          />
          <Input
            name='password' placeholder="Password" onChange={this.onChange} type='password' value={this.state.password}
          />
          <Input
            name='verifyPassword' placeholder="Verify Password" onChange={this.onChange} type='password' value={this.state.verifyPassword}
          />
          <Input
            name='dob' onChange={this.onChange} type='date' value={this.state.dob}
          />
          <Button
            text='REGISTER' type='submit'
          />
        </RegisterForm>
      </Register_Container>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  validate: state.auth.valid
})

export default connect(mapStateToProps, { registerUser })(RegisterContainer)