import styles from './page.module.css';
import { Inter} from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "next-blog | portfolio",
  description: "This is the educational site for developers with a variety of technologies",
};

export default function Layout({ children }) {
  return (
        <div className={styles.container}>
          <h1 className={styles.mainTitle}>Our works</h1>
          {children}
        </div>
      
  )
}
