'use client'
import Link from 'next/link'
import styles from './page.module.css'
export default function Register() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="username" placeholder='username' className={styles.input} required />
        <input type="email" placeholder='email' className={styles.input} required />
        <input type="password" placeholder='password' className={styles.input} required />
        <button className={styles.button}>Register</button>
      </form>
      <Link href='/dashboard/login'>Login with an existing account</Link>
    </div>
  )
}
