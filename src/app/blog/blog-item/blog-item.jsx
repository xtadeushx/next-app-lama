import React from 'react';
import styles from './blog-item.module.css';
import Link from 'next/link';
import Image from 'next/image';

const BlogItem = ({ img = '', title = '', desc = '', id = '' }) => {
  return (
    <Link href={`/blog/${id}`} className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={img}
          width={400}
          height={250}
          className={styles.image}
          alt={title}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{desc}</p>
      </div>
    </Link>
  )
}

export default BlogItem;