"use client"
import React, { useContext } from 'react';


import styles from './dark-mode-component.module.css';
import { ThemeContext } from 'src/context/ThemeContext.js';

const DarkModeComponent = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggleTheme}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      >
      </div>
    </div>
  )
}

export default DarkModeComponent