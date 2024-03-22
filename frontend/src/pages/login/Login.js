// Login.js
import React, { useState } from 'react';
import styles from './login.module.css';
import { UserContext } from "../../UserContext.jsx";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate(); // Hook to get the navigate function

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

    let data;

    try {
      const response = await fetch("http://localhost:3001/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      })
      //parsing the response object
      data = await response.json();
      console.log("The response is: ", data.userFound)

      if(!response.ok) {
        throw new Error('Error checking for user');
      }

    } catch(err) {
      console.log(err.message);
    }

    if(data && (data.userFound == true)) {
      setIsLoggedIn(true);
      navigate('/myevents');
    } else {
      setIsLoggedIn(false);
      alert("Incorrect Username or Password! Please try again.");
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
