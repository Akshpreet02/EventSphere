// Header.js

import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className={styles.header}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.nav}>
          <ul>
            <Link to='/' className={styles.list}>
              <li>
                Home
              </li>
            </Link>
            <Link to='/browse' className={styles.list}>
              <li>
                Browse
              </li>
            </Link>
            <Link to='/create' className={styles.list}>
              <li>
                Create
              </li>
            </Link>
            <li className={styles.dropdown}>
              <div className={styles.list}>
              Account
                  <ul className={styles.dropdownContent}>
                    <Link to='/myevents'>
                      <li className={styles.list}>
                        <u>My Events</u>
                      </li>
                    </Link>
                    <Link to='/login'>
                      <li className={styles.list}>
                        <u>Login</u>
                      </li>
                    </Link>
                    <Link to='/signup'>
                      <li className={styles.list}>
                        <u>Signup</u>
                      </li>
                    </Link>
                  </ul>
                </div>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Header;