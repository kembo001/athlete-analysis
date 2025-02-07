// src/components/Login.js
import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignUp) {
      // Call your sign-up endpoint or Firebase sign-up method
      // For example:
      // const response = await axios.post('/api/auth/signup', { name, email, password });
    } else {
      // Call your login endpoint or Firebase login method
      // const response = await axios.post('/api/auth/login', { email, password });
    }

    // If successful, store token/user data in global state or localStorage
  };

  return (
   <div className='auth-con'>
        <div className="auth-container">
      <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <div>
            <label>Name</label>
            <input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
        )}
        
        <div>
          <label>Email</label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>

        <div>
          <label>Password</label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>

        <button type="submit">{isSignUp ? 'Create Account' : 'Login'}</button>
      </form>

      <p onClick={toggleForm} style={{ cursor: 'pointer', color: 'blue' }}>
        {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign up"}
      </p>
    </div>
   </div>
  );
}

export default Login;
