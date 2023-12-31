'use client'

import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';
import DarkModeComponent from '../dark-mode-component/dark-mode-component';
import { LINKS } from 'src/constants/links';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const session = useSession();
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>Next tutorial</Link>
      <div className={styles.links}>
        <DarkModeComponent />
        {LINKS.map(link =>
          (<Link key={link.id} href={link.url} className={styles.links}>{link.title}</Link>))
        }
      </div>
      {session.status === 'authenticated' &&
        <button className={styles.logout} onClick={signOut}>Logout</button>
      }
    </div>
  )
}

export default Navbar