import React from 'react';
import HomePage from './pages/homepage/homepage';
import { Route, Switch } from 'react-router-dom';
import './App.css';

const HatsPage = () => (

  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact to='/' component={HomePage} />
        <Route to='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
};

export default App;
