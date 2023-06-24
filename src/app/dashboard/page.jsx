'use client';

import { useEffect, useState } from 'react';

import useSWR from 'swr';

import styles from './page.module.css';
import { useSession } from 'next-auth/react';

export default function Dashboard() {
  /*======================With useEffect =========================================*/
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(null);
  // const [isLoading, setLoading] = useState(false);
  // useEffect(() => {
  //   async function getData() {
  //     setLoading(true);
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts/',
  //     )

  //     if (!res.ok) {
  //       setLoading(false);
  //       setError('Failed to fetch data')
  //     }
  //     const data = await res.json()
  //     setLoading(false);
  //     setData(data);
  //   }
  //   getData();
  // }, [])

  const { data: session, status } = useSession()
  console.log(session)
  console.log(status)
  /*======================With swr =========================================*/
  const fetcher = (...args) => fetch(...args).then(res => res.json());

  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts?limit=3', fetcher);

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <div className={styles.container}>{
      data.length > 0 && data?.map(el => (
        <p key={el.title} className={styles.title}>{el.title}</p>
      ))
    }

    </div>
  )
}
