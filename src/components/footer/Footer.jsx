import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Lamamia. All rights reserved.</div>
      <div className={styles.social}>
        <Link href='https://uk-ua.facebook.com/' target="_blank">
          <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Lama Dev Facebook Account" />
        </Link>
        <Link href='https://www.linkedin.com/feed/' target="_blank">
          <Image src="/linkedin.png" width={30} height={30} className={styles.icon} alt="xtadeushx Dev  Linkedin" />
        </Link>
        <Link href='https://github.com/xtadeushx?tab=repositories' target="_blank">
          <Image src="/github.png" width={25} height={25} className={styles.icon} alt="xtadeushx Dev  gitHub" />
        </Link>
        <Link href='https://www.instagram.com/' target="_blank">
          <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
        </Link>
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
      </div>
    </div>
  );
};

export default Footer;