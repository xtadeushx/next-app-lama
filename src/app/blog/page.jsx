import styles from './page.module.css'
import BlogItem from './blog-item/blog-item'
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',
    { next: { revalidate: 10 } }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
export default async function Blog() {
  const data = await getData();
  return (
    <div className={styles.container}>
      {data.length > 0 && data.map(post => (
        <BlogItem
          key={post.id}
          desc={post.body}
          id={post.id}
          title={post.title}
          img='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg' />
      ))}
    </div>
  )
}
