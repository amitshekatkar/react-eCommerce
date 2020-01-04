import React from 'react'
import './SignUp.scss'
import FormInput from '../Form-Input'
import Button from '../Button'
import { auth, createUserPropfileDocument } from '../../firebase/firebase.utils'

class SignUp extends React.Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleSubmit = async event => {
    console.log('handle submit');
    event.preventDefault();
    const { displayName, password, email, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('Password Dont match')
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserPropfileDocument(user, { displayName })

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (e) {
      console.log(e)
    }
  }

  handleChange = (e) => {
    const { name, value} = e.target;
    
    this.setState({[name]: value})
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2>I don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form 
          className="sign-up-form" 
          onSubmit={this.handleSubmit}
        >
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <Button type='submit'>Sign Up</Button>
        </form>
      </div>
    )
  }
}

export default SignUp
