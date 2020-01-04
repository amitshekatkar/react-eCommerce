import React from 'react'
import './SigninAndSignUp.scss'
import SignIn from '../../Components/SignIn'
import SignUp from '../../Components/SignUp'

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn/>
      <SignUp/>
    </div>
  )
}

export default SignInAndSignUpPage
