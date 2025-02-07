import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className='signup-container'>
      <div className='signup-form'>
        <h2 className='signup-heading'>Create an Account</h2>
        <form className='form'>
          <div className='form-group'>
            <input 
              type="email" 
              placeholder='Enter your email'  
              className='form-input'
              required 
            />
          </div>
          <div className='form-group'>
            <input 
              type="password" 
              placeholder='Enter your password' 
              className='form-input'
              required 
            />
          </div>
          <div className='form-group'>
            <input 
              type="password" 
              placeholder='Confirm your password' 
              className='form-input'
              required 
            />
          </div>
          <div className='form-action'>
            <Link to='/reactworks'>
              <button type="submit" className="btn btn-primary w-100">Signup</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
