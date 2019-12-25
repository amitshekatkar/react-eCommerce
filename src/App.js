import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import { Homepage } from './Components/Pages/Homepage';

const HatsPage = (props) => {
  return (<div>Hats Page.</div>)
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
