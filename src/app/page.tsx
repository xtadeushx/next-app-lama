import Image from 'next/image'
import styles from './page.module.css'
import hero from 'public/hero.png'
import Button from 'src/components/button/Button'
// import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See our works" />
      </div>


      <div className={styles.item}>
        <Image src={hero} alt='hero' className={styles.img} />
      </div>
    </div>
  )
}
