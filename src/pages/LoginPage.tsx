import React from "react";
import styles from "../styles/LoginPage.module.css";
import bookLogo from "../assets/images/book-logo.png";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.container}>
        <img
          src={bookLogo}
          alt="Logo"
          className={styles.image}
          data-testid="App-Logo"
        />

        <div className={styles.inputContainer}>
          <label htmlFor="username" className={styles.labelStyles}>
            Username
          </label>
          <input
            type="text"
            id="username"
            className={styles.input}
            placeholder="Enter user name"
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="password" className={styles.labelStyles}>
            Password
          </label>
          <input
            type="password"
            id="password"
            className={styles.input}
            placeholder="Enter password"
          />
        </div>

        <button className={styles.button}>Login</button>
        <p className={styles.text}>Don't have an account? Register</p>
      </div>
    </div>
  );
};

export default LoginPage;
