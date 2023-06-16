import React from 'react';

import styles from './dark-mode-component.module.css';

const DarkModeComponent = () => {
  const mode = 'dark';
  return (
    <div className={styles.container}>
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