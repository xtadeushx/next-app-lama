import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/button/Button'
export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}></h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src='/contact.png'
            fill={true}
            alt='contacts'
            className={styles.image}
          />
        </div>
        <form action="" className={styles.form}>
          <input
            className={styles.input}
            placeholder='name'
            type="text" />
          <input
            className={styles.input}
            placeholder='email'
            type="email" />
          <textarea
            className={styles.textArea}
            placeholder='message'
            rows={10}
            cols={30}
          />
          <Button url='#' text='Send' type='submit' />
        </form>
      </div>
    </div>
  )
}
