import { useNavigate } from 'react-router-dom'
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";

const LoginPage = () => {
    const navigate=useNavigate();
  return (
    <div className='login_container'>
      <div className='login_right'></div>
      <div className='login_left'>
        <p>Dont have account?<a href='/signup'>SignUp</a></p>

        <h1>LogIn</h1>
        <button  style={{display:'flex', gap:'5px', alignItems:'center'}}><FcGoogle size={30}/>Continue With Google</button>
        <button  style={{display:'flex', gap:'5px', alignItems:'center'}}><FaTwitter size={30}/>Continue With Twitter</button>

        <div className='OR'>
            <div></div>
            <span>OR</span>
            <div></div>
        </div>

        <form>
            <label>user name or email address
            <input type='text'/>
            </label>
           

            <label>Password
            <input type='text'/>
            </label>

            <a href='/forgot-password'>Forgot password ?</a>

            <button className='btn login_btn' onClick={()=>{
                navigate('/dashboard')
            }}>Log In</button>
            <p>Dont have account?<a href='/signup'>SignUp</a></p>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
