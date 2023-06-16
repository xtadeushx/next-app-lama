import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import styles from './page.module.css';

async function getData({ id }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
    { next: { revalidate: 10 } }
  )
  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const { title, body, userId } = await getData(params);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.desc}>
            {body}
          </p>
          <div className={styles.author}>
            <Image
              src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{userId}</span>
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