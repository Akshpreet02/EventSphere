// Login.js
import React, { useState } from 'react';
import styles from './login.module.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Update login values
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Temporary
    console.log('Username:', username);
    console.log('Password:', password);

    const credentials = {
      "username": username,
      "password": password
    }

    try {
      const response = await fetch("http://localhost:3001/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEvent),
      })

      if(!response.ok) {
        throw new Error('Error checking for user');
      }

    } catch(err) {
      console.log(err.message);
    }

    //making it empty
    setUsername('');
    setPassword('');
  };

  return (
    <div className={styles.login}>

      <form onSubmit={handleSubmit}>

        <div className={styles.formGroup}>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
        </div>

        <div className={styles.signupLink}>
          Don't have an account? <a href="/signup">Signup</a>
        </div>

        <button type="submit" className={styles.loginButton}>Login</button>

      </form>
      
      <button className={styles.googleButton}>Login with Google</button>
    </div>
  );
}

export default Login;
