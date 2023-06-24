import styles from './page.module.css';
import BlogItem from './blog-item/blog-item';
export const metadata = {
  title: "next-blog | blog",
  description: "This is the page that contains blogs of the users",
};

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Blog() {
  const data = await getData();
  return (
    <div className={styles.container}>
      {data.length > 0 && data.map(post => (
        <BlogItem
          key={post._id}
          desc={post.body}
          id={post._id}
          title={post.title}
          img={post.img} />
      ))}
    </div>
  )
}
