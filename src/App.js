import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from './Pages/Homepage'
import ShopPage from './Pages/Shop'
import Header from './Components/Header';
import SignInAndSignUpPage from './Pages/SigninAndSignUp';
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  state = {
    currentUser: null,
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({currentUser: user});
      console.log(user)
    })
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render()  {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
