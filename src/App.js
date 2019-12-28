import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from './Pages/Homepage'
import ShopPage from './Pages/Shop'
import Header from './Components/Header';
import SignInAndSignUpPage from './Pages/SigninAndSignUp';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
