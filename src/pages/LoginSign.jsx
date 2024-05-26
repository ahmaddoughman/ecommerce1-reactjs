import React from 'react'
import './CSS/LoginSignup.css'

const LoginSign = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' name="" id="" />
          <input type="text" placeholder='Email Address' name="" id="" />
          <input type="password" placeholder='Password' name="" id="" />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account <span>login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSign
