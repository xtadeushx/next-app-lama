'use client';

import { useEffect, useState } from 'react';

import useSWR from 'swr';

import styles from './page.module.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

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

  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then(res => res.json());

  const { data, error, isLoading } = useSWR(`https://api/posts?username=${session?.data?.user?.name}`, fetcher);

  console.log('data', data);

  if (session.status === "loading") {
    return <p>Loading...</p>
  }

  if (session.status === "unauthenticated") {
    router?.push('/dashboard/login')
  }
  /*======================With swr =========================================*/

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>{
        data.length > 0 && data?.map(el => (
          <p key={el.title} className={styles.title}>{el.title}</p>
        ))
      }
      </div>
    )
  }
}
