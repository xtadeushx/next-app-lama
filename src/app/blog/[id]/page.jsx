import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium nobis, sed saepe dolores suscipit perferendis sequi est eaque. Laborum!
          </p>
          <div className={styles.author}>
            <Image
              src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Alex</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum ratione consequuntur facere minus, vitae est, labore incidunt accusantium possimus dicta quae tempore totam, modi adipisci!
        </p>
      </div>
    </div>
  )
}

export default BlogPost