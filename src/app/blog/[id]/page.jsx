import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import styles from './page.module.css';

async function getData({ id }) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`,
    { next: { revalidate: 10 } }
  )
  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const { title, desc, username, _id, img, content } = await getData(params);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.desc}>
            {desc}
          </p>
          <div className={styles.author}>
            <Image
              src={img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={img}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          {content}
        </p>
      </div>
    </div>
  )
}

export default BlogPost