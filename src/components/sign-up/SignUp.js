import React, { useState } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton'
import { auth, createUserProfile } from '../../firebase/firebase.util'
import './SignUp.scss';

const SignUp = () => {
  const [credentials, setCredentials] = useState({ displayName: "", email: "", password: "", confirmPassword: "" })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = credentials;
    console.log(displayName);
    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return;
    }

    try {
      const { user } = auth.createUserWithEmailAndPassword(email, password);
      await createUserProfile(user, { displayName });
      setCredentials({ displayName: "", email: "", password: "", confirmPassword: "" })
    } catch (err) {
      console.error("error occured:", err);
    }
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value })
  }

  const { displayName, email, password, confirmPassword } = credentials;

  return (
    <div className='sign-up'>
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          handleChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          handleChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          handleChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          handleChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  )
}

export default SignUp
