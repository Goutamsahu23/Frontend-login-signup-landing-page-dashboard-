// LoginForm.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ isSignup }) => {

    const navigate=useNavigate();
  return (
    <form>
      <label>
        User name or email address
        <input type='text'/>
      </label>

      <label>
        Password
        <input type='password'/>
      </label>

      {isSignup && (
        <>
          <label>
            Confirm Password
            <input type='password'/>
          </label>
          {/* Additional signup fields can be added here */}
        </>
      )}

      <a href='/forgot-password'>Forgot password?</a>

      <button className='btn login_btn' onClick={()=>{
        navigate('/dashboard');
      }}>{isSignup ? 'Sign Up' : 'Log In'}</button>
      <p>{isSignup ? 'Already have an account?' : 'Don\'t have an account?'}
        <a href={isSignup ? '/login' : '/signup'}>{isSignup ? 'Log In' : 'Sign Up'}</a>
      </p>
    </form>
  );
}

export default LoginForm;


