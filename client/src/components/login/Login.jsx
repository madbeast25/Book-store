import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';  // Assuming your CSS file is in the same directory

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message
  
    try {
      const response = await axios.post('http://localhost:5000/api/v1/auth/login', {
        username,
        password,
      });
  
      const { token } = response.data;
      localStorage.setItem('token', token); // Store token
  
      console.log('Login successful:', response.data.message);
      navigate('/admin-dashboard'); // Redirect to a dashboard or another page upon success
    } catch (error) {
      console.error('Error during login:', error.response?.data?.message || error.message);
      setError(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <section className="login">
      <div className="center">
        <h1>Login</h1>
        <form onSubmit={handleLogin} autoComplete="off">
          <div className="txt_field">
            <input
              type="text"  // Changed from text to email
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label>username</label>  
            <span></span>
          </div>
          <div className="txt_field">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
            <span></span>
          </div>
          {error && <p className="error">{error}</p>} {/* Display error message */}
          
          <button type="submit" className="button" name="submit">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
