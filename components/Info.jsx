import Image from 'next/image';
import AvgIcon from '../public/avg.png';
import PersonIcon from '../public/person.png';
import AnalyzerIcon from '../public/analyzer.png';

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
    </section>
  );
}
