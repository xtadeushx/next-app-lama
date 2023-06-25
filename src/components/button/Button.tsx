import styles from './button.module.css';
import Link from 'next/link';


interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  text?: string;
  url?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<Props> = ({ text = '', url = '', type = 'button' }) => {
  return (
    <Link href={url}>
      <button className={styles.container} type={type}>{text}</button>
    </Link>
  )
}

export default Button