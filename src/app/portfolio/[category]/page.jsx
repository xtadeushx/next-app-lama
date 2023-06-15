import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button'
import CategoryItem from './category-item/category-item'
import { ITEMS } from './data'

const getData = (cat) => {
  const data = ITEMS[cat];

  if (data) {
    return data;
  }

  return notFound();
};
const Category = ({ params }) => {
  const { category } = params;
  const data = getData(category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{category}</h1>
      {
        data.map(item =>
          <CategoryItem key={item.id} {...item} />
        )}

    </div>
  )
}

export default Category