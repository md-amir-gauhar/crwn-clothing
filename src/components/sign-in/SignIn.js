import React, { useState } from 'react';
import CustomButton from '../custom-button/CustomButton';
import FormInput from '../form-input/FormInput';
import './SignIn.scss';
import { signInWithGoogle } from '../../firebase/firebase.util';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
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
          label="email"
          handleChange={(e) => setEmail(e.target.value)}
        />

        <FormInput
          required
          type="password"
          name="password"
          label="password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton onClick={signInWithGoogle}>Sign In with Google</CustomButton>
      </form>
    </div>
  )
}

export default SignIn
