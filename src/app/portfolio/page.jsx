import Link from 'next/link'
import styles from './page.module.css'
import PortfolioItem from './portfolio-item/portfolio-item'
const PORTFOLIO_ITEMS = [
  { id: 1, url: '/portfolio/illustration', text: 'illustration' },
  { id: 2, url: '/portfolio/websites', text: 'websites' },
  { id: 3, url: '/portfolio/applications', text: 'applications' },
]
export default function Portfolio() {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        {PORTFOLIO_ITEMS.map(item => (
          <PortfolioItem key={item.id} url={item.url} text={item.text} />
        ))}
      </div>
    </div>
  )
}
