// Header.js

import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { UserContext } from "../../UserContext.jsx";
import { useContext } from 'react';
import Logo from "./logo.webp";
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
    const navigate = useNavigate(); // Hook to get the navigate function

    console.log("Logged in? ",isLoggedIn)

    const handleLogout = () => {
      console.log('User logged out');
      setIsLoggedIn(false);
      navigate('/');
    }

    return (
      <div className={styles.header}>
        <div><img className={styles.logo} src={Logo} alt='logo'></img></div>
        <div className={styles.nav}>
          <ul>
            <Link to='/' className={styles.list}>
              <li>
                Home
              </li>
            </Link>
            {/* <Link to='/browse' className={styles.list}>
              <li>
                Browse
              </li>
            </Link> */}
            <Link to='/create' className={styles.list}>
              <li>
                Create
              </li>
            </Link>
            {!!isLoggedIn && (
              <li className={styles.dropdown}>
                <div className={styles.list}>
                Account
                    <ul className={styles.dropdownContent}>
                      <Link to='/myevents'>
                        <li className={styles.list}>
                          <u>My Events</u>
                        </li>
                      </Link>
                      <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
                    </ul>
                  </div>
              </li>
            )}
            {!isLoggedIn && (
              <li className={styles.dropdown}>
                <div className={styles.list}>
                Account
                    <ul className={styles.dropdownContent}>
                      <Link to='/login'>
                        <li className={styles.list}>
                          <u>Login</u>
                        </li>
                      </Link>
                      <Link to='/signup'>
                        <li className={styles.list}>
                          <u>Sign Up</u>
                        </li>
                      </Link>
                    </ul>
                  </div>
              </li> 
            )}
          </ul>
        </div>
      </div>
    );
};

export default Header;