import { useRef } from 'react';
import Image from 'next/image';
import Photo1 from '../public/Photo1.png';
import Photo2 from '../public/Photo2.png';
import Photo3 from '../public/Photo3.png';
import ChainLeft from '../public/chain1.png';
import ChainRight from '../public/chain2.png';

import styles from '../styles/Team.module.scss';

export default function Team({ teamRef }) {
  return (
    <section className={styles.team}>
      <div className={styles.team__top}>
        <p className={styles.team__title}>Our Top Team</p>
        <p className={styles.team__text}>
          Learn more about how you can save our planet's nature.{' '}
        </p>
      </div>
      <div ref={teamRef} className={styles.team__photos}>
        <div className={styles.team__photo}>
          <Image width={323} height={274} src={Photo1} alt="photo" />
        </div>
        <div className={styles.team__photo}>
          <Image width={342} height={291} src={Photo2} alt="photo" />
        </div>
        <div className={styles.team__photo}>
          <Image width={276} height={312} src={Photo3} alt="photo" />
        </div>
        <div className={styles.team__leftchain}>
          <Image width={380} height={127} src={ChainLeft} alt="chain" />
        </div>
        <div className={styles.team__rightchain}>
          <Image width={380} height={127} src={ChainRight} alt="chain" />
        </div>
      </div>
    </section>
  );
}
