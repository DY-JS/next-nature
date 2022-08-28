import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BrownLeaf from '../public/BrownLeaf.png';
import CloseImg from '../public/close.png';
import OpenImg from '../public/Btn-open.png';
import Input from './common/Input';
import Button from './common/Button';

import styles from '../styles/ActionItem.module.scss';

export default function ActionItem({ title, text }) {
  const [isOpened, setOpened] = useState(false);
  const handleClick = () => {
    setOpened(!isOpened);
  };

  return (
    <div className={styles.container}>
      <article className={styles.container__article}>
        <p className={styles.container__title}>{title}</p>
        <div className={styles.container__icon} onClick={handleClick}>
          {isOpened ? (
            <Image src={CloseImg} width={40} height={40} alt="logo" />
          ) : (
            <Image src={OpenImg} width={40} height={40} alt="logo" />
          )}
        </div>
      </article>

      {isOpened && <p className={styles.container__text}>{text}</p>}
      <div className={styles.container__line}></div>
    </div>
  );
}
