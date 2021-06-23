import React, { useEffect } from 'react';
import HomePage from './pages/homepage/homepage';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import ShopPage from './pages/shop/ShopPage';
import './App.css';
import Header from './components/header/Header';
import SignInSignUp from './pages/sign-in-and-sign-up/SignInSignUp';
import { auth, createUserProfile } from './firebase/firebase.util';
import { setCurrentUser } from './redux/user/user.action';

const App = ({ setCurrentUser, currentUser }) => {

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
  }, [setCurrentUser])


  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact path="/signin"
          render={() =>
            currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInSignUp />
            )}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);