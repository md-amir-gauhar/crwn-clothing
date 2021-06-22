import React, { useEffect } from 'react';
import HomePage from './pages/homepage/homepage';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import ShopPage from './pages/shop/ShopPage';
import './App.css';
import Header from './components/header/Header';
import SignInSignUp from './pages/sign-in and sign-up/SignInSignUp';
import { auth, createUserProfile } from './firebase/firebase.util';
import { setCurrentUser } from './redux/user/user.action';

const App = ({ setCurrentUser }) => {

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
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
