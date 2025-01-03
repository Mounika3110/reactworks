import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="home">
          <img 
            src="https://img.freepik.com/free-vector/paper-note-memphis-background_361591-1940.jpg?t=st=1733723693~exp=1733727293~hmac=fe1e2532c428a20d0e6c926e47f9119976d83cac98b87f533273a60e362a0b39&w=740" 
            alt="Background"/>
          <div className="info">
            <h1>Login</h1>
            <form action="">
              <label htmlFor="username">UserName</label>
              <input 
                type="text" 
                placeholder="Enter Your UserName" 
                className="input form-control" 
                id="username" 
              /><br/>
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                placeholder="Enter Your Password" 
                className="input form-control" 
                id="password" 
              />
            </form>
            <div className="text-start">
              <h6>
                <Link to="/forgetpassword">Forget Password?</Link>
              </h6>
            </div>
            <Link to="/dashboard">
              <button type="button" className="btn btn-outline-primary m-2 w-50">
                Login
              </button>
            </Link>
            <div className="alter">
              <h6>Not a Member?  <Link to="/signup">Sign up</Link></h6>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8">
      </div>
    </div>
  );
}

export default Login;
