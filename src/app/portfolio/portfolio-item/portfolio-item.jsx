import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';
const PortfolioItem = ({ url = '', text = '' }) => {
  return (
    <Link className={styles.item} href={url}>
      <span className={styles.title}>{text}</span>
    </Link>
  )
}

export default PortfolioItem