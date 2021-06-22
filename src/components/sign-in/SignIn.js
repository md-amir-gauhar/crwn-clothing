import React, { useState } from 'react';
import CustomButton from '../custom-button/CustomButton';
import FormInput from '../form-input/FormInput';
import './SignIn.scss';
import { auth, signInWithGoogle } from '../../firebase/firebase.util';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);

      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          required
          type="email"
          name="email"
          value={email}
          label="Email"
          handleChange={(e) => setEmail(e.target.value)}
        />

        <FormInput
          required
          type="password"
          name="password"
          label="Password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn
