import styles from './page.module.css'
import BlogItem from './blog-item/blog-item'

export default function Blog() {
  return (
    <div className={styles.container}>
      <BlogItem desc='test' id='1' img='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg' title='title' />
    </div>
  )
}
