import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoImg from '../public/Logo.svg';
import BurgerImg from '../public/Union.svg';
import CloseImg from '../public/icon-close.svg';

import styles from '../styles/Navigation.module.scss';

export default function Navigation() {
  const navigation = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Our mission', path: '/mission' },
    { id: 3, title: 'Places', path: '/places' },
    { id: 4, title: 'Team', path: '/team' },
  ];

  const [isOpened, setIsOpened] = useState(false);

  return (
    <nav
      className={!isOpened ? styles.nav : `${styles.nav} ${styles.nav_open}`}
    >
      <div className={styles.nav__logo}>
        <Image
          src={LogoImg}
          width={111}
          height={37}
          alt="logo"
          className={styles.nav__logoimg}
          onClick={() => setIsOpened(false)}
        />
        <div className={styles.nav__close} onClick={() => setIsOpened(false)}>
          <Image src={CloseImg} width={16} height={16} alt="logo" />
        </div>
      </div>
      <div className={styles.nav__menu} onClick={() => setIsOpened(false)}>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            <a className={styles.nav__item}>{title}</a>
          </Link>
        ))}
      </div>
      <button className={styles.nav__button}>Apply</button>
      <div className={styles.nav__burger} onClick={() => setIsOpened(true)}>
        <Image src={BurgerImg} width={22} height={17} alt="logo" />
      </div>
    </nav>
  );
}
