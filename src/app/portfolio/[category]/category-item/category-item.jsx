import React from 'react';

import Image from 'next/image';

import Button from '@/components/button/Button';

import styles from './page.module.css';

const CategoryItem = ({ title = '', desc = '', image = '' }) => {
  return (
    <div className={styles.item}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>{desc}</p>
        <Button url='#' text='See More' />
      </div>
      <div className={styles.imgContainer}>
        <Image src={image} fill={true} alt={title} />
      </div>
    </div>
  )
}

export default CategoryItem