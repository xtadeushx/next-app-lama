'use client'

import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
const LINKS = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];
const Navbar = () => {
  return (
    <div className={styles.container}>

      <Link href='/' className={styles.logo}>Next tutorial</Link>
      <div className={styles.links}>
        {LINKS.map(link =>
          (<Link key={link.id} href={link.url} className={styles.links}>{link.title}</Link>))
        }
      </div>
      <button className={styles.logout} onClick={() => console.log('Logout')}>Logout</button>
    </div>
  )
}

export default Navbar