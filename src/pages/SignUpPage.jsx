import React from 'react'
import UserFrom from '../components/UserForms'
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";

const SignUpPage = () => {
  return (
    <div className='login_container'>
      <div className='login_right'></div>
      <div className='login_left'>
        <p>Already have account?<a href='/login'>Log In</a></p>

        <h1>Sign Up</h1>
        <button  style={{display:'flex', gap:'5px', alignItems:'center'}}><FcGoogle size={30}/>Continue With Google</button>
        <button  style={{display:'flex', gap:'5px', alignItems:'center'}}><FaTwitter size={30}/>Continue With Twitter</button>

        <div className='OR'>
            <div></div>
            <span>OR</span>
            <div></div>
        </div>

        <UserFrom isSignup />
      </div>
    </div>
  )
}

export default SignUpPage
