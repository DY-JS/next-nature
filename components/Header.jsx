import Navigation from './Navigation';
import Subheader from './Subheader';

import styles from '../styles/Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
      <Subheader />
    </header>
  );
}
