import styles from "./index.module.scss";
import { ReactNode } from 'react';
import Link from "next/link";


interface Props {
  children?: ReactNode;
}

const Header = ({ }: Props) => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <nav>
          <ul className={styles.headerUl}>
            <li><Link href="homepage">Home</Link></li>
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
