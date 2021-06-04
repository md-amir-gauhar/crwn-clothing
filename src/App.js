import React, { useEffect, useState } from 'react';
import HomePage from './pages/homepage/homepage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage';
import './App.css';
import Header from './components/header/Header';
import SignInSignUp from './pages/sign-in and sign-up/SignInSignUp';
import { auth } from './firebase/firebase.util'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user);
      console.log(user);
    });
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </div>

  );
};

export default App;
