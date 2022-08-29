import Image from 'next/image';
import AvgIcon from '../public/avg.png';
import PersonIcon from '../public/person.png';
import AnalyzerIcon from '../public/analyzer.png';
import TopLeftLeaf from '../public/TopLeftLeaf.png';
import TopRightLeaf from '../public/TopRightLeaf.png';
import MiddleLeftLeaf from '../public/MiddleLeftLeaf.png';
import MiddleRightLeaf from '../public/MiddleRightLeaf.png';
import BottomLeftLeaf from '../public/BottomLeftLeaf.png';
import BottomRightLeaf from '../public/BottomRightLeaf.png';

import styles from '../styles/Info.module.scss';

export default function Info() {
  const icons = [
    {
      id: '1',
      icon: <Image width={42} height={42} src={PersonIcon} alt="icon" />,
      description: 'Assets value COMPOSer',
    },
    {
      id: '2',
      icon: <Image width={36} height={36} src={AnalyzerIcon} alt="icon" />,
      description: 'GRAPH BUDGET ANALYZER',
    },
    {
      id: '3',
      icon: <Image width={32} height={40} src={AvgIcon} alt="icon" />,
      description: 'MONTHLY AVG. REVENUE',
    },
  ];

  return (
    <section className={styles.info}>
      <div className={styles.info__top}>
        <p className={styles.info__title}>
          The scale of the challenges facing our planet can seem daunting, but
          we can all do something.
        </p>
      </div>

      <div className={styles.info__line}></div>

      <div className={styles.info__stats}>
        {icons.map(({ id, icon, description }) => (
          <div key={id} className={styles.info__item}>
            <div className={styles.info__icon}>{icon}</div>
            <span className={styles.info__description}>{description}</span>
          </div>
        ))}
      </div>
      <div className={styles.info__topleft}>
        <Image width={100} height={77} src={TopLeftLeaf} alt="leaf" />
      </div>
      <div className={styles.info__topright}>
        <Image width={162} height={111} src={TopRightLeaf} alt="leaft" />
      </div>
      <div className={styles.info__middleleft}>
        <Image width={51} height={27} src={MiddleLeftLeaf} alt="leaf" />
      </div>
      <div className={styles.info__middleright}>
        <Image width={51} height={27} src={MiddleRightLeaf} alt="leaft" />
      </div>
      <div className={styles.info__bottomleft}>
        <Image width={51} height={27} src={BottomLeftLeaf} alt="leaf" />
      </div>
      <div className={styles.info__bottomright}>
        <Image width={51} height={27} src={BottomRightLeaf} alt="leaft" />
      </div>
    </section>
  );
}
