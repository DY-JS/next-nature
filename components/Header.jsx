import styles from '../styles/Header.module.scss';
import Navigation from './Navigation';
import Subheader from './Subheader';

export default function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
      <Subheader />
    </header>
  );
}
