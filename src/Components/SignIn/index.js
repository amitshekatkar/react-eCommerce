import React, { Component } from 'react'
import FormInput from '../Form-Input';
import './SignIn.scss'
import Button from '../Button';
import {signInWithGoogle} from '../../firebase/firebase.utils'

export default class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: '', password: '' })
  }

  onHandleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign In  with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            type="email" 
            handleChange={this.onHandleChange} 
            value={this.state.email} 
            required 
            label="Email"
          />
          <FormInput 
            name="password" 
            type="password" 
            value={this.state.password} 
            required 
            handleChange={this.onHandleChange} 
            label="Password"
          />
          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn={true}>Sign In with Google</Button>
          </div>
        </form>
      </div>
    )
  }
}
