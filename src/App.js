import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from './Pages/Homepage'
import ShopPage from './Pages/Shop'
import Header from './Components/Header';
import SignInAndSignUpPage from './Pages/SigninAndSignUp';
import { auth, createUserPropfileDocument } from './firebase/firebase.utils'

class App extends React.Component {
  state = {
    currentUser: null,
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      // this.setState({currentUser: user});
      if(userAuth) {
        const userRef = await createUserPropfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state))
        }) 
      } 
        this.setState({ currentUser: userAuth })
      
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
