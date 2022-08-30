import Image from 'next/image';
import TwitterImg from '../public/Twitter.png';
import LinkedInImg from '../public/LinkedIn.png';
import FacebookImg from '../public/Facebook.png';

import styles from '../styles/Footer.module.scss';

export default function Footer() {
  const socials = [
    {
      id: 1,
      image: <Image width={32} height={32} src={TwitterImg} alt="twitter" />,
      path: 'https://twitter',
    },
    {
      id: 2,
      image: <Image width={32} height={32} src={FacebookImg} alt="facebook" />,
      path: 'https://facebook.com/',
    },
    {
      id: 3,
      image: <Image width={32} height={32} src={LinkedInImg} alt="linkedin" />,
      path: 'https://www.linkedin.com',
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__contacts}>
        <p className={styles.footer__firsttitle}>CONTACTS</p>
        <div className={styles.footer__allrights}>
          <p className={styles.footer__contacttext}>2019 Rootz Foundation.</p>
          <span className={styles.footer__contacttext}>
            All rights reserved
          </span>
        </div>
      </div>
      <div className={styles.footer__headquaters}>
        <p className={styles.footer__title}>Headquaters</p>
        <p className={styles.footer__text}>1234 Taliban</p>
        <p className={styles.footer__text}>Los Angeles, La 1234567</p>
        <p className={styles.footer__text}>(123) 456-7890</p>
      </div>
      <div className={styles.footer__socials}>
        <p className={styles.footer__title}>Social media</p>
        <div className={styles.footer__links}>
          {socials.map(({ id, image, path }) => (
            <span key={id} className={styles.footer__link}>
              <a href={path} target="_blank" rel="noopener noreferrer">
                {image}
              </a>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
