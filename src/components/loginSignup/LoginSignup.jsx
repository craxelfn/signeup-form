import React, { useState } from 'react';
import './loginSignup.css';
import user_icon from '../Assets/person.png'; 
import email_icon from '../Assets/email.png'; 
import password_icon from '../Assets/password.png';

const LoginSignup = () => {
  const [action, setAction] = useState("Sign up"); 

  return (
    <div className='container'>
      <div className='header'>
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? null : 
          <div className="input">
            <img src={user_icon} alt="User Icon" />
            <input type="text" placeholder='Name' />
          </div>
        }
        <div className="input">
          <img src={email_icon} alt="Email Icon" />
          <input type="email" placeholder='Email Id' />
        </div>
        <div className="input">
          <img src={password_icon} alt="Password Icon" />
          <input type="password" placeholder='Password' />
        </div>
      </div>
      {action === "Sign up" ? null :
        <div className='forgot-password'>
          Lost Password? <span>Click here!</span>
        </div>
      }
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign up")}>Sign up</div>
        <div className={action === "Sign up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Login</div>
      </div>
    </div>
  );
}

export default LoginSignup;
