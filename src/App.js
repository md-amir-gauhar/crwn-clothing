import React, { useEffect, useState } from 'react';
import HomePage from './pages/homepage/homepage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage';
import './App.css';
import Header from './components/header/Header';
import SignInSignUp from './pages/sign-in and sign-up/SignInSignUp';
import { auth, createUserProfile } from './firebase/firebase.util'

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })

      }
      setCurrentUser(userAuth);
    });

    return () => {
      unsubscribeFromAuth();
    }
  }, [])


  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
